import BasicButton from "../GlobalElements/BasicButton";

function AboutSection({ onBack }) {
    return (
        <div className="center-column">
            <p>About me content goes here.</p>
            <BasicButton
                onClick={onBack}
            >Back
            </BasicButton>
        </div>
    )
}

export default AboutSection;