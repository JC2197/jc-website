import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


export default function ClickableCard({ project }) {
    
    return (
        <motion.div
            className="project-card"
            whileHover={{
                scale: 1.1,
                rotate: [0, 1, -1, 0],
                color: "rgb(255, 106, 0)",
                transition: {
                    scale: { duration: 0.1 },
                }
            }}
        >
            <Link to={project.path}>
                <img src={project.icon} alt="" width="80" height="80" />
            </Link>
            <span>{project.label}</span>
            
        </motion.div>
    );
}