import { useState } from 'react';
import './LandingPage.css';
import AboutSection from './AboutSection';
import NavigationButtons from './NavigationButtons';

function LandingPage() {
    const [currentPage, setCurrentPage] = useState("home");
    const name = "Joe Conticello"

    return <div className="page-wrapper">
        <h1>{name}</h1>
        {currentPage === "home" && (
            <NavigationButtons
                onAboutClick={() => setCurrentPage("about")}
            />
        )}
        {currentPage === "about" && (
            <AboutSection onBack={() => setCurrentPage("home")} />
        )}

    </div>;
}


export default LandingPage;