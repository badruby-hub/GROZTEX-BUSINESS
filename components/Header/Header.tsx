"use client"
import { useEffect, useState } from "react";
import BurgerMenu from "../Burger-Menu/Burger-btn";
import  classes  from "./header.module.css";
import Link from "next/link"
import MenuList from "../Burger-Menu/Burger-list";


export default function Header() {
        const [active, setActive] = useState(false);

        useEffect(() => {
        const handleResize = () => {
              if (window.innerWidth > 850) {
                    setActive(false);
            }
  };

  window.addEventListener("resize", handleResize);

  // Вызываем сразу при монтировании, чтобы скрыть бургер если нужно
  handleResize();

  return () => {
    window.removeEventListener("resize", handleResize);
  };
}, []);
    return<header className={classes.header}>
       <nav className={classes.nav}>
        <div className={classes.block__logo}><Link className={`${classes.link} ${classes.logo}`} href="/">
            <div className={classes.logo__name}>GROZ
             <svg className={classes.tether} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
             <polygon fill="#009393" points="24,44 2,22.5 10,5 38,5 46,22.5"></polygon>
             <path fill="#fff" d="M38,22c0-1.436-4.711-2.635-11-2.929V16h8v-6H13v6h8v3.071C14.711,19.365,10,20.564,10,22
             s4.711,2.635,11,2.929V36h6V24.929C33.289,24.635,38,23.436,38,22z M24,24c-6.627,0-12-1.007-12-2.25c0-1.048,3.827-1.926,9-2.176
             v3.346c0.96,0.06,1.96,0.08,3,0.08s2.04-0.02,3-0.08v-3.346c5.173,0.25,9,1.128,9,2.176C36,22.993,30.627,24,24,24z"></path>
             </svg>EX</div>
            </Link></div>
        <ul className={classes.ul}>
            <li className={classes.li}><Link className={`${classes.link} ${classes.info}`} href="/information">Информация</Link></li>
            <li className={classes.li}><Link className={`${classes.link} ${classes.docs}`} href="/contacts">Контакты</Link></li>
        </ul>
        <div className={classes.block__btn}><Link className={`${classes.link} ${classes.btn__for__exchange}`} href="https://t.me/GROZTEX_bot">Обменять</Link></div>
         {!active && <BurgerMenu active={active} setActive={setActive}/>}
          <MenuList active={active} setActive={setActive}/>
      </nav>
    </header>
}