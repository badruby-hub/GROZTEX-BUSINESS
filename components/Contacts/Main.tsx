import Link from "next/link"
import classes from "./main.module.css"

export default function Main() {
    return<main className={classes.main}>
        <section className={classes.section__one}>
            <h1 className={classes.zagolovok}>
                Контакты
            </h1>
            <div className={`${classes.block__text}`}>
                <p>
                    Ваш надежный партнер
                    для финансовых операций — GROZTEX предлагает безопасный
                    и быстрый обмен криптовалют с нулевыми комиссиями.
                </p>
            </div>
        </section>
         <section className={classes.section__two}>
            <div className={classes.block__email}>
                <div className={classes.line__neon}></div>    
              <p className={`${classes.btn} ${classes.chat__bot}`}>
                <Link className={`${classes.link} ${classes.btn__groztex__bot}`} href="#">@GROZTEX_bot</Link>
              </p>
            </div>
            <div className={classes.block__support}>
                <div className={classes.line__neon__two}></div>
               <p className={`${classes.btn} ${classes.chat__support}`}>
                <Link className={`${classes.link} ${classes.btn__groztex__support}`} href="https://t.me/GROZTEX">@GROZTEX_Support</Link>
               </p>
            </div>
            <div className={classes.block__address}>
               <div className={`${classes.chat__support}`}>
                 <p className={classes.address__text}>Республика Чечня, Малгобекская улица, 19</p>
                 <div className={classes.btn__exchange}>
                    <Link className={`${classes.link} ${classes.btn__for__exchange__two}`} href="https://t.me/GROZTEX_bot">Обменять</Link>
                 </div>
               </div>
            </div>
         </section>
    </main>
}