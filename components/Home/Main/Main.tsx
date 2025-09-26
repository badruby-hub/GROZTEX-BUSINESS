"use client";
import Link from "next/link"
import classes from "./main.module.css"
import { useEffect, useState } from "react";

export default function Main() {
    const [buy, setBuy] = useState <string | null>(null);
    const [sell, setSell] = useState <string | null> (null);
    useEffect(() => {
    const fetchWell = async ()=>{
          try {
            const res = await fetch("/api/well-rate");
            const data = await res.json();
            const apiBuy = parseFloat(data?.sell);
            const apiSell = parseFloat(data?.buy);
            setBuy((apiBuy + 0.4).toFixed(2));
            setSell((apiSell).toFixed(2));
          } catch (error) {
            console.error(error)
          }
    };
    fetchWell();
},[]);
    return(
    <main className={classes.main}>
        <section  className={classes.container__one}>
           <h1 className={classes.h1}>
            GROZTEX ускорит ваш бизнес
           </h1>
           <h3 className={classes.h3}>
            Лучший обменник
            </h3>
            <div className={classes.block__btn}>
                <Link className={`${classes.link} ${classes.btn__for__exchange__one}`} href="https://t.me/GROZTEX_bot">Купить / Продать USDT</Link>
            </div>
     <ul className={classes.container__course}>
        <li className={`${classes.course} ${classes.block__dollar__trc}`}>
            <p className={` ${classes.dollar}`}>$</p>
            <div>
            <p className={`${classes.first__paragraph} ${classes.trc__paragraph}`}>TRC 20</p>
            <p className={`${classes.second__paragraph} ${classes.usdt__paragraph}`}>USDT</p>
            </div>
        </li>
        {/* <li className={classes.course}>
            <p className={classes.first__paragraph}>Change</p>
            <p className={classes.second__paragraph}>+14.04%</p>
        </li> */}
        <li className={classes.course}>
            <p className={classes.first__paragraph}>Покупка</p>
            <p className={classes.second__paragraph}>{buy}</p>
        </li>
        <li className={classes.course}>
            <p className={classes.first__paragraph}>Продажа</p>
            <p className={classes.second__paragraph}>{sell}</p>
        </li>
        {/* <li className={classes.course}>
            <p className={classes.first__paragraph}>Диаграмма</p>
            <p className={classes.second__paragraph}></p>
        </li> */}
     </ul>
     </section>
     <section className={classes.container__two}>
     <h1 className={classes.h1__two}>Почему GROZTEX ?</h1>
    
    <article className={classes.block__card}>
           <article className={`${classes.card__exchange} ${classes.card}`}>
               <div className={classes.block__img}><img src="Vector.png" alt="" /></div>
               <h4 className={`${classes.zagolovok__card}`}>Обмен</h4>
               <p className={classes.text__card}>Мгновенный обмен</p>
               <p className={classes.text__card}>Мы работаем 24/7</p>
           </article>
           <article className={`${classes.card__transactions} ${classes.card}`}>
             <div className={classes.block__img}><img src="transaction.png" alt="" /></div>
                     <h4 className={`${classes.zagolovok__card}`}>Сделки</h4>
                     <p className={classes.text__card}>2500+ сделок в день</p>
                     <p className={classes.text__card}>Обмен USDT без комиссии</p>
           </article>
           <article className={`${classes.card__market} ${classes.card}`}>
             <div className={classes.block__img}><img src="wallet.png" alt="" /></div>
                     <h4 className={`${classes.zagolovok__card}`}>Рынок</h4>
                     <p className={classes.text__card}>Лучший курс на рынке</p>
                     <p className={classes.text__card}>Самый низкий курс на покупку USDT</p>
           </article>
    </article>
    <article className={classes.block__info__text}>
        <h2 className={classes.zagolovok__groztex}>GROZTEX</h2>
        <p className={classes.text__block__info}> 
            Ваш выбор для безопасного и выгодного обмена криптовалюты.
            Мы здесь, чтобы сделать ваши транзакции простыми и надёжными.
        </p>
  <div className={classes.block__btn}><Link className={`${classes.link} ${classes.btn__for__exchange__two}`} href="https://t.me/GROZTEX_bot">Обменять</Link></div>
    </article>
     </section>

    </main>
)}