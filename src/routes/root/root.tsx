import "./root.css";
import heroImg from "../../assets/headshot_circle.png"
import "animate.css";
import TypingEffect from "react-typed.ts";
import React from "react";

export default function Root() {
  return (
    <>
      <h1 className="center-text">
        <TypingEffect
          strings={["Tyler Dailey"]}
          typeSpeed={50}
          backSpeed={0}
          loop={false}
          showCursor={true}
        />
      </h1>

      <h2 className="center-text">
        <TypingEffect
          strings={["Husband, Father, Software Engineer, Sports Enthusiast"]}
          typeSpeed={40}
          backSpeed={0}
          loop={false}
          startDelay={1200}
          showCursor={true}
        />
      </h2>
      
      <img src={heroImg} className="hero-img" />
    </>
  );
}
