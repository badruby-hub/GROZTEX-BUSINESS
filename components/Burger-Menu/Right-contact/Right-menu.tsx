"use client";

import { useState } from "react";
import classes from "./sidebare.module.css";

export default function RightMenu() {
  const [active, setActive] = useState(false);

  return (
    <aside className={`${classes.aside}`}>
        <ul
          className={`${classes.ul__btn__open}`}>
        <li onClick={() => setActive(!active)} className={`${classes.btn__open} ${!active ? classes.visible : classes.hidden}`}>
            <div className={classes.block__img}>
              <img src="btn-news.png" alt="" />
            </div> 
        </li> 
        <li onClick={() => setActive(!active)} className={`${classes.btn__close} ${!active ? classes.hidden : classes.visible}`}>
            <span className={classes.line__one}></span>
            <span className={classes.line__two}></span>
        </li>
         </ul>
        <ul className={`${classes.ul} ${active ? classes.visible : classes.hidden}`}>
          <li>
            <a href="https://t.me/groztex_news">
   <div className={classes.block__img}>
              <img src="/telegram-icon/icon-tg-96.png" alt="icon-telegram" />
            </div>
            <p>Telegram</p>
           </a>     
          </li>
          <li>
            <a href="https://chat.whatsapp.com/I0PLZZCBFaG2ytel0YtwMf">
            <div className={classes.block__img}>
              <img src="/whatsApp-icon/icon-whatsapp-96.png" alt="" />
            </div>
            <p>WhatApp</p>
            </a>
          </li>
        </ul>
    </aside>
  );
}
