import BasicButton from "../GlobalElements/BasicButton";
import { about } from "../../content/about";

const aboutContent = about.about1;
function AboutSection({ onBack }) {
    return (
        <div className="center-column">
            <h2>{aboutContent.title}</h2>
            {aboutContent.description.split("\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
            <BasicButton
                onClick={onBack}
            >Back
            </BasicButton>
        </div>
    )
}

export default AboutSection;