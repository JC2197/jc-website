import BasicButton from "../GlobalElements/BasicButton";

function ProjectSection({ onBack }) {
    return (
        <div className="center-column">
            <p>
                <a href="https://joeconticello.itch.io/heltower">Heltower</a></p>
            <BasicButton
                onClick={onBack}
            >Back
            </BasicButton>
        </div>
    )
}

export default ProjectSection;