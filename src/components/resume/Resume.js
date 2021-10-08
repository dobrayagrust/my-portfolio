import React from "react";
import style from './Resume.module.css';

export const Resume = () => {
    return (
        <div className={style.container}>
                <div className={style.sectionHeader}>
                    <p className={style.sectionDescription}>My level of knowledge in some tools</p>
                    <h2 className={style.sectionTitle}>Resume</h2>
                </div>
                <div className={style.sectionResume}>
                    <div className={style.sectionEducation}>
                        <h3>Education</h3>
                        <div>
                            <h5>Frontend-End Developer</h5>
                            <span>IT-Incubator</span>
                            <p>text</p>
                        </div>
                        <div>
                            <h5>Frontend-End Developer</h5>
                            <span>IT-Incubator</span>
                            <p>text</p>
                        </div>
                        <div>
                            <h5>Frontend-End Developer</h5>
                            <span>IT-Incubator</span>
                            <p>text</p>
                        </div>
                    </div>
                    <div className={style.sectionExperience}>
                        <h3>Experience</h3>
                        <div>
                            <h5>Frontend-End Developer</h5>
                            <span>IT-Incubator</span>
                            <p>text</p>
                        </div>
                        <div>
                            <h5>Frontend-End Developer</h5>
                            <span>IT-Incubator</span>
                            <p>text</p>
                        </div>
                        <div>
                            <h5>Frontend-End Developer</h5>
                            <span>IT-Incubator</span>
                            <p>text</p>
                        </div>
                    </div>
            </div>
        </div>
    );
}

