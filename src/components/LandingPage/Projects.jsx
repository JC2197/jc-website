import BasicButton from "../GlobalElements/BasicButton";

function ProjectSection({ onBack }) {
    return (
        <div className="center-column">
            <p>Project content goes here.</p>
            <BasicButton
                onClick={onBack}
            >Back
            </BasicButton>
        </div>
    )
}

export default ProjectSection;