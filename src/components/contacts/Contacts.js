import React from "react";
import style from './Contacts.module.css';

export const Contacts = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>Contact</h2>
            </div>
            <div className={style.form}>
                <form>
                    <input className={style.input}/><br/>
                    <input className={style.input}/><br/>
                    <textarea className={style.textarea}/><br/>
                    <button className={style.button}>send </button>
                </form>
            </div>
        </div>
    );
}

