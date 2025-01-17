import "./about.css";
import TextColumnCard from "../../components/TextColumnCard/TextColumnCard";
import familyPicture from "../../assets/family.png"
import React from "react";


export default class About extends React.Component {
    leftComponent = <img src={familyPicture} />
    rightComponent = <div className="text-block flex-wrap">
        <p>Originally from Salt Lake City, Utah. I have lived my whole life in various cities across Utah with the exception of 2 years I spent living in Malaysia. I met and married my wife Aysia, and together we have 3 kids: Easton, Anni, and Dakota (DJ).</p>
        <p>I got my B.S. Computer Science degree from the University of Utah in December 2018. I started working as an intern at Ivanti prior to getting my degree, and while there I worked on a server application written in C# which communicated with and managed iOS and macOS client devices. I was primarily responsible for developing the automated testing system and building it up from scratch.</p>
        <p>After getting my degree I continued working at Ivanti for a few years, moving from developing the automated tests to working on the server and client applications. After Ivanti I moved to Healthcare Compliance Pros where I worked with Typescript, React, and Kotlin to develop a web application to host healthcare compliance trainings. I then moved to Kion where I worked with Angular and Golang on an application to manage cloud environments. I currently work at Cotiviti creating tools for auditors to help our clients ensure they are properly billing their customers and to reduce waste.</p>
    </div>

    render() {
        return (
            <>
                <h1 className="center-text">About Me</h1>
                <TextColumnCard leftComponent={this.leftComponent} rightComponent={this.rightComponent} />
            </>
        )
    }
}