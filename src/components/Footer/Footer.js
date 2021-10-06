import React from "react";
import style from './Footer.module.css';

export const Footer = () => {
    return (
        <div className={style.container}>
<div className={style.text}>Copyright © 2021 All rights reserved.</div>
            <div className={style.footerLinks}>
                <a className={style.link}
                   href="/privacy/"
                   data-analytics-title="site map">
                    Privacy Policy
                </a>
                <a className={style.link}
                   href="/terms/"
                   data-analytics-title="site map">
                    Terms of Use
                </a>
                <a className={style.link}
                   href="/salespolicies/"
                   data-analytics-title="site map">
                    Sales and Refunds
                </a>
                <a className={style.link}
                   href="/legal/"
                   data-analytics-title="site map">
                    Legal
                </a>
                <a className={style.link}
                   href="/sitemap/"
                   data-analytics-title="site map">
                    Site Map
                </a>
            </div>
        </div>
    );
}

