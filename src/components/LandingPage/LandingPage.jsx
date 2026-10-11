import { useState } from 'react';
import './LandingPage.css';
import AboutSection from './AboutSection';
import NavigationButtons from './NavigationButtons';
import ContactSection from './ContactSection';
import ProjectSection from './Projects';

function LandingPage() {
    const [currentPage, setCurrentPage] = useState("home");
    const name = "Joe Conticello"

    return <div className="page-wrapper">
        <h1>{name}</h1>
        {currentPage === "home" && (
            <NavigationButtons
                onAboutClick={() => setCurrentPage("about")}
                onProjectsClick={() => setCurrentPage("projects")}
                onContactClick={() => setCurrentPage("contact")}
            />
        )}
        {currentPage === "about" && (
            <AboutSection onBack={() => setCurrentPage("home")} />
        )}

        {currentPage === "projects" && (
            <ProjectSection onBack={() => setCurrentPage("home")} />
        )}
        {currentPage === "contact" && (
            <ContactSection onBack={() => setCurrentPage("home")} />
        )}

    </div>;
}


export default LandingPage;