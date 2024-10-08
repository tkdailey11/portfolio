import React from "react";
import "./about.css";
import ImageTextCard from "../../components/ImageTextCard/ImageTextCard";

export default function About() {
    return (
        <>
            <h1 className="center-text">About Me</h1>
            <ImageTextCard className="about-image-card" />
        </>
    )
}