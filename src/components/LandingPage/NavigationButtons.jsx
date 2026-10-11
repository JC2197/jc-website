import { motion } from "framer-motion";
import BasicButton from "../GlobalElements/BasicButton";

function NavigationButtons({ onAboutClick, onProjectsClick, onContactClick }) {
    const buttonList = ["About", "Projects", "Contact"];
    return (
        <div className="button-list-wrapper">
            <div className="button-list">
                {buttonList.map((label) => (
                    <BasicButton
                        key={label}
                        onClick={label === "About" ? onAboutClick : label === "Projects" ? onProjectsClick : onContactClick}
                    >
                        {label}
                    </BasicButton>
                ))}
            </div>
        </div>
    )
}

export default NavigationButtons;
