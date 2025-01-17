import "./resume.css"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { faBriefcase, faSchool, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Resume() {
    return (
        <div className="flex-row resume-container">
            <div className="left-col">
                <div className="resume-card height-100 skills-card">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Nov 2024 - Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">Senior Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Cotiviti</h4>
                            <p>
                                Data Engineering
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="July 2023 - Oct 2024"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">Full Stack Software Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Kion</h4>
                            <p>
                                Golang Microservices, Angular Frontend
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Dec 2021 - July 2023"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Healthcare Compliance Pros</h4>
                            <p>
                                Kotlin Microservices, React Frontend
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Dec 2019 - Nov 2021"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Engineer II</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ivanti</h4>
                            <p>
                                .Net Web Services, Swift and Objective-C applications
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="May 2018 - Dec 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Engineer I</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ivanti</h4>
                            <p>
                                C# Desktop Application, Swift and Objective-C applications
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Aug 2017 - May 2018"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Automation Engineer</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ivanti</h4>
                            <p>
                                Automated tests written in C#, Javascript, and AppleScript
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="May-Aug 2017"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faBriefcase} />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
                            <h4 className="vertical-timeline-element-subtitle">Ivanti</h4>
                            <p>
                                Automated tests written in C#, Javascript, and AppleScript
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2012-2018"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faSchool} />}
                        >
                            <h3 className="vertical-timeline-element-title">B.S. Computer Science</h3>
                            <h4 className="vertical-timeline-element-subtitle">University of Utah</h4>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<FontAwesomeIcon icon={faStar} />}
                        />
                    </VerticalTimeline>
                </div>
            </div>
            <div className="right-col flex-column">
                <div className="resume-card flex-column skills-card">
                    <h2>Professional Summary</h2>
                    <p>
                        Experienced Software Engineer with over 7 years of expertise in full-stack
                        development and a strong background in modern web technologies,
                        including TypeScript, Angular, React, and serverless architectures. Proficient
                        in a range of programming languages such as TypeScript, Golang, Node.js,
                        C#, Kotlin, and Swift. Skilled in designing and implementing CI/CD pipelines
                        to optimize deployment processes and ensure efficient, scalable solutions.
                    </p>
                </div>
                <div className="resume-card flex-column skills-card">
                    <h2>Skills</h2>
                    <ul className="skills-list">
                        <li>Go</li>
                        <li>Typescript</li>
                        <li>Node.js</li>
                        <li>JavaScript</li>
                        <li>AWS - IAM</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>Terraform</li>
                        <li>Azure DevOps CI/CD</li>
                        <li>Gitlab</li>
                        <li>REST apis</li>
                        <li>Angular</li>
                        <li>React</li>
                        <li>C# .NET</li>
                        <li>Python</li>
                        <li>Kotlin</li>
                        <li>Swift</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}