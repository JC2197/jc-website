import { useState } from 'react';
import './LandingPage.css';
import { AnimatePresence, motion } from "framer-motion";
import AboutSection from './AboutPage/components/AboutSection';
import NavigationButtons from './NavigationButtons';
import ContactSection from './ContactSection';
import ProjectSection from './ProjectsPage/components/Projects';

function LandingPage() {
    const [currentPage, setCurrentPage] = useState("home");
    const name = "Joe Conticello"

    return <div className="page-wrapper">

        <AnimatePresence
            initial={false}
            custom={currentPage === "home" ? -1 : 1}>
            <motion.div
                key={currentPage}
                custom={currentPage === "home" ? -1 : 1}
                variants={{
                    enter: direction => ({ y: `${direction * 100}vh` }),
                    exit: direction => ({ y: `${direction * -100}vh` }),
                }}
                initial="enter"
                animate={{ y: 0 }}
                exit="exit"
                transition={{
                    type: "tween",
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                }}
                className="page">
                {currentPage === "home" && (
                    <>
                        <h1>{name}</h1>
                        <NavigationButtons
                            onAboutClick={() => setCurrentPage("about")}
                            onProjectsClick={() => setCurrentPage("projects")}
                            onContactClick={() => setCurrentPage("contact")}
                        />
                    </>
                )}
                {currentPage === "about" && <AboutSection onBack={() => setCurrentPage("home")} />}
                {currentPage === "projects" && <ProjectSection onBack={() => setCurrentPage("home")} />}
                {currentPage === "contact" && <ContactSection onBack={() => setCurrentPage("home")} />}
            </motion.div>
        </AnimatePresence>

    </div>;
}


export default LandingPage;
