import React from "react";
import style from './Skills.module.css';
import {Skill} from "./Skill/Skill";


export const Skills = () => {
    return (
        <div className={style.content}>
            <div className={style.sectionHeading}>
                <p className={style.sectionDescription}>Check out my skills</p>
                <h2 className={style.sectionTitle}>Skills</h2>
            </div>
            <div className={style.skillSection}>
                <Skill className={style.item}
                       title={'JavaScript'}
                       description={'asdasdasdasdasd'}
                />
                <Skill className={style.item}
                       title={'React'}
                       description={'asdasdadasfsdfsdf'}
                />
                <Skill className={style.item}
                       title={'CSS'}
                       description={'asdasdsadklgjdsflkgdflkj'}
                />
                <Skill title={'Web Design'}
                       description={'asdasdsadklgjdsflkgdflkj'}
                       className={style.item}
                />
                <Skill title={'Web Design'}
                       description={'asdasdsadklgjdsflkgdflkj'}
                       className={style.item}
                />
                <Skill title={'Web Design'}
                       description={'asdasdsadklgjdsflkgdflkj'}
                       className={style.item}
                />
            </div>

            {/*<div className={style.resumeSection}>*/}
            {/*    <div className={style.row}>*/}
            {/*        <div className={style.educationBlock}>*/}
            {/*            <h3>Education</h3>*/}
            {/*        </div>*/}
            {/*        */}
            {/*        <div>*/}
            {/*            <span>span</span>*/}
            {/*            <h5>IT-INCUBATOR</h5>*/}
            {/*            <span></span>*/}
            {/*            <p>p</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <span>span</span>*/}
            {/*            <h5>IT-INCUBATOR</h5>*/}
            {/*            <span></span>*/}
            {/*            <p>p</p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <span></span>*/}
            {/*            <h5>IT-INCUBATOR</h5>*/}
            {/*            <span></span>*/}
            {/*            <p></p>*/}
            {/*        </div>*/}
            {/*        </div>*/}
            {/*    <div className={style.row}>*/}
            {/*        <div className={style.experienceBlock}>*/}
            {/*            <h3>Experience</h3>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <span></span>*/}
            {/*            <h5>IT-INCUBATOR</h5>*/}
            {/*            <span></span>*/}
            {/*            <p></p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <span></span>*/}
            {/*            <h5>IT-INCUBATOR</h5>*/}
            {/*            <span></span>*/}
            {/*            <p></p>*/}
            {/*        </div>*/}
            {/*        <div>*/}
            {/*            <span></span>*/}
            {/*            <h5>IT-INCUBATOR</h5>*/}
            {/*            <span></span>*/}
            {/*            <p></p>*/}
            {/*        </div>*/}

            {/*    </div>*/}

            {/*    </div>*/}
            {/*<div className={style.contentSkillsLevel}>*/}
            {/*    <p className={style.sectionDescription}>My level of knowledge in some tools</p>*/}
            {/*    <h2 className={style.sectionTitle}>Resume</h2>*/}
            {/*</div>*/}
        </div>
    );
}

