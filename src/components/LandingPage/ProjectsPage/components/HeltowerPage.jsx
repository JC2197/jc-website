import { projects } from "../models/projects";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BasicButton from "../../../GlobalElements/BasicButton.jsx";
import VideoPlayer from "../../../VideoPlayer/VideoPlayer.jsx";
import videos from "../../../VideoPlayer/videos/Video.js";
import VideoCarousel from "../../../GlobalElements/VideoCarousel/VideoCarousel.jsx";

export default function HeltowerPage() {
    const activeProject = projects.heltower;
    const pageVideos = videos.heltower;
    

    return (
        <div className="center-column">
            <h1>{activeProject.title}</h1>
            <div className="paragraph-container">
                {activeProject.description.split("\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
            <h1>Videos</h1>
            <VideoCarousel pageVideos={pageVideos} />


        </div>
    )
}