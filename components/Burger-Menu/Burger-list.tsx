import Link from "next/link";
import classes from "./burger.module.css";



export default function MenuList({active, setActive}:{active:boolean; setActive:(v:boolean)=>void}) {
    return <section  className={`${classes.container__list__menu} ${active ? classes.open : classes.closed}`}>
       <div className={classes.close__btn__menu} onClick={()=>setActive(!active)}>
          <span></span>
          <span></span>
        </div>
      <section className={classes.block__link}>
      <div className={classes.block__logo}>
        <h1><Link onClick={()=>setActive(!active)} className={`${classes.link}`} href="/">GROZTEX</Link></h1>
      </div>
      <ul className={classes.ul}>
        <li><Link onClick={()=>setActive(!active)} href="information" className={`${classes.link}`}> Информация</Link></li>
        <li><Link onClick={()=>setActive(!active)} href="contacts" className={`${classes.link}`}>Контакты</Link></li>
      </ul>
      <div>
      <div className={classes.block__btn}><Link className={`${classes.link} ${classes.btn__for__exchange}`} href="https://t.me/GROZTEX_bot">Обменять</Link></div>
      <div className={classes.block__btn}><Link className={`${classes.link} ${classes.btn__for__news}`} href="https://t.me/groztex_news">подписаться</Link></div>
      </div>
     <article className={classes.block__info__three}>
            <p className={`${classes.btn} ${classes.chat__bot}`}><Link className={`${classes.link} ${classes.btn__groztex__bot}`} href="https://t.me/GROZTEX_bot">@GROZTEX_bot</Link></p>
            <p className={`${classes.btn} ${classes.chat__news}`}><Link className={`${classes.link} ${classes.btn__groztex__news}`} href="https://t.me/groztex_news">Новостной канал</Link></p>
            <p className={`${classes.btn} ${classes.chat__email}`}><Link className={`${classes.link} ${classes.btn__groztex__info}`} href="#">info.groztex.com</Link></p>
            <p className={`${classes.btn} ${classes.chat__support}`}><Link className={`${classes.link} ${classes.btn__groztex__support}`} href="https://t.me/GROZTEX">@GROZTEX_Support</Link></p>
           </article>
           </section>
    </section>
}