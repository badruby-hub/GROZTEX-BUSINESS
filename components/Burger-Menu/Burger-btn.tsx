"use client";

import classes from "./burger.module.css";




export default function BurgerMenu({active, setActive}:{active:boolean; setActive:(v:boolean) => void}) {
    return <button onClick={()=> setActive(!active)} className={classes.header__burger__btn}>
        <span></span>
        <span></span>
        <span></span>
    </button>
}