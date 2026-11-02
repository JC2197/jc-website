import { motion, AnimatePresence } from "framer-motion";
import BasicButton from "../BasicButton.jsx";
import VideoPlayer from "../../VideoPlayer/VideoPlayer.jsx";
import { useState } from "react";

export default function VideoCarousel({ pageVideos}) {
    const [{ videoIndex, direction }, setNavigation] = useState({ videoIndex: 0, direction: 1 });
    const activeVideo = pageVideos[videoIndex];

    function changeVideo(step) {
        if (pageVideos.length < 2) return;

        setNavigation(previous => ({
            videoIndex:
                (previous.videoIndex + step + pageVideos.length)
                % pageVideos.length,
            direction: step,
        }));
    }
    return (
        <div className="video-carousel">
                <BasicButton
                    onClick={() => changeVideo(-1)}
                    disabled={pageVideos.length < 2}
                    aria-label="Previous video"
                >Previous</BasicButton>
                <div className="video-container">
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.div
                            className="video-slide"
                            key={activeVideo.id}
                            custom={direction}
                            variants={{
                                enter: direction => ({
                                    x: direction * 100 + "vw",
                                }),
                                exit: direction => ({
                                    x: direction * -100 + "vw",
                                }),
                            }}
                            initial="enter"
                            animate={{ x: 0, opacity: 1 }}
                            exit="exit"
                            transition={{
                                type: "tween",
                                duration: 0.4,
                                ease: [0.22, 1, 0.36, 1],
                            }} >

                            <VideoPlayer key={activeVideo.id} newVideoProp={activeVideo.src} />
                        </motion.div>
                    </AnimatePresence>
                </div>
                <BasicButton
                    onClick={() => changeVideo(1)}
                    disabled={pageVideos.length < 2}
                    aria-label="Next video"
                >Next</BasicButton>
            </div>
    )
}