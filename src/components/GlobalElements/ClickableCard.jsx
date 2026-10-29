import { Link } from "react-router-dom";

export default function ClickableCard({ project }) {
    return (
        <Link className="project-card" to={project.path}>
            <img src={project.icon} alt="" width="80" height="80" />
            <span>{project.label}</span>
        </Link>
    );
}