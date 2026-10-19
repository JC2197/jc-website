import { useEffect, useRef, useState } from 'react';
import "./UnityPlayer.css";
const buildName = "Heltower";

function UnityPlayer() {
    const canvasRef = useRef(null);
    const unityRef = useRef(null);

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return undefined;
        }
        let disposed = false;
        const baseUrl = `${import.meta.env.BASE_URL}unity`;
        const buildUrl = `${baseUrl}/Build`;

        const script = document.createElement("script");
        script.src = `${buildUrl}/${buildName}.loader.js`;

        script.async = true;
        script.onload = async () => {
            try {
                if (typeof window.createUnityInstance !== "function") {
                    throw new Error("createUnityInstance is not available on the window object.");
                }
                const instance = await window.createUnityInstance(
                    canvas,
                    {
                        dataUrl: `${buildUrl}/${buildName}.data`,
                        frameworkUrl: `${buildUrl}/${buildName}.framework.js`,
                        codeUrl: `${buildUrl}/${buildName}.wasm`,
                        streamingAssetsUrl: `${baseUrl}/StreamingAssets`,
                        companyName: "YourCompany",
                        productName: "MyGame",
                        productVersion: "1.0.0",
                    },
                    setProgress,

                );
                if (disposed) {
                    await instance.Quit();
                    return;
                }
                unityRef.current = instance;
                setIsLoaded(true);
            } catch (loadError) {
                if (!disposed) {
                    setError(loadError instanceof Error ? loadError.message : "The Unity Player could not be loaded.");
                }
            }
        };
        script.onerror = () => {
            if (!disposed) {
                setError(`Could not load the Unity script: ${script.src}`);
            }
        };
        document.body.appendChild(script);
        return () => {
            disposed = true;
            script.remove();
            const instance = unityRef.current;
            unityRef.current = null;

            if (instance) {
                void instance.Quit();
            }
        };
    }, []);

    function sendMessageToUnity() {
        if (!unityRef.current) {
            return;
        }

        unityRef.current.SendMessage(
            "GameManager",
            "ReceiveBrowserMessage",
            "Hello from React",
        );
    }
    return (
        <section className="unity-player">
            {!isLoaded && !error && (
                <p>Loading game: {Math.round(progress * 100)}%</p>
            )}

            {error && <p role="alert">{error}</p>}

            <canvas
                ref={canvasRef}
                className="unity-player__canvas"
                width="960"
                height="600"
                tabIndex="0"
            />

            <button type="button" onClick={sendMessageToUnity} disabled={!isLoaded}>
                Send message to game
            </button>
        </section>
    );
}

export default UnityPlayer;
