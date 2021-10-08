import React from "react";
import style from './Nav.module.css';

export const Nav = () => {
    return (
        <div className={style.container}>
                <ul className={style.sectionList}>
                    <li className={style.item}><a href="">Homepage</a></li>
                    <li className={style.item}><a href="">About</a></li>
                    <li className={style.item}><a href="">Skills</a></li>
                    <li className={style.item}><a href="">Projects</a></li>
                    <li className={style.item}><a href="">Contacts</a></li>
                </ul>
        </div>
    );
}

