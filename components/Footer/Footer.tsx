import Link from "next/link";
import classes from "./footer.module.css";

export default function Footer() {
    return<footer className={classes.footer}>
      <section className={classes.container__one}>
           <article className={classes.block__info__one}>
            <h3>GROZTEX</h3>
            <p> 
                Ваш надёжный партнёр для финансовых операций,
                предлагает быстрый безопасный обмен криптовалюты без комиссии.
            </p>
            <div className={classes.block__btn}><Link className={`${classes.link__btn} ${classes.btn__for__exchange__two}`} href="https://t.me/GROZTEX_bot">Обменять USDT</Link></div>
           </article>
           <article className={classes.block__info__two}>
            <h3>info</h3>
            <p className={classes.btn}><Link className={`${classes.link}`} href="#">Пользовательское соглашение</Link></p>
            <p className={classes.btn}><Link className={`${classes.link}`} href="#">Политика конфиденциальности</Link></p>
            <p className={classes.btn}><Link className={`${classes.link}`} href="#">Политика по борьбе с отмыванием денег</Link></p>
           </article>
             <article className={classes.block__info__three}>
            <h3>Contact</h3>
            <p className={`${classes.btn} ${classes.chat__news}`}><Link className={`${classes.link} ${classes.btn__groztex__news}`} href="https://t.me/groztex_news">Новостной канал</Link></p>
            <p className={`${classes.btn} ${classes.chat__bot}`}><Link className={`${classes.link} ${classes.btn__groztex__bot}`} href="https://t.me/GROZTEX_bot">@GROZTEX_bot</Link></p>
            <p className={`${classes.btn} ${classes.chat__support}`}><Link className={`${classes.link} ${classes.btn__groztex__support}`} href="https://t.me/GROZTEX">@GROZTEX_Support</Link></p>
            <p className={`${classes.btn} ${classes.chat__email}`}><Link className={`${classes.link} ${classes.btn__groztex__info}`} href="mailto:groztex@yandex.ru?subject=Запрос%20с%20сайта&body=Здравствуйте">groztex@yandex.ru</Link></p>
           </article>
      </section>
          </footer>
}