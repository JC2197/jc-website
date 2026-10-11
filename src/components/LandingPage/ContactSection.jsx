import BasicButton from "../GlobalElements/BasicButton";

function ContactSection({onBack}) {
    return (
        <div className="center-column">
            <p>JoeConti21@gmail.com</p>
            <BasicButton
                onClick={onBack}
                justify="center"
                align="center"
            >Back
            </BasicButton>
        </div>
    )
}

export default ContactSection;