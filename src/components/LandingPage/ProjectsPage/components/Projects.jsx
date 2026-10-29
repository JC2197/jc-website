import BasicButton from "../../../GlobalElements/BasicButton";
import ClickableCard from "../../../GlobalElements/ClickableCard";
import projectLinks from "./Projects/projectLinks.json";
import ProjectsTabRow from "./ProjectsTabRow";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";



function ProjectSection({ onBack }) {

    const [activeCategory, setActiveCategory] = useState("games-software");
    const direction = activeCategory === "music" ? -1 : 1;
    const visibleProjects = projectLinks.filter(
        project => project.category === activeCategory
    );
    return (

        <section className="projects-page">
            <header className="projects-header">
                <h1>Projects</h1>
                <ProjectsTabRow
                    activeCategory={activeCategory}
                    onSelect={setActiveCategory}
                />
            </header>
            <div className="projects-panels">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={activeCategory}
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
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="center-column projects-content"
                    >
                        <div className="project-grid">
                            {visibleProjects.map(project => (
                                <ClickableCard key={project.id} project={project} />
                            ))}
                        </div>

                        {visibleProjects.length === 0 && <p>Projects coming soon.</p>}

                        <BasicButton onClick={onBack}>Back</BasicButton>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

export default ProjectSection;