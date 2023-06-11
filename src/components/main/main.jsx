import css from "./main.module.css";
import Bobby from "./../UI/main_imgs/Bobby.png";
import arrow from "./../UI/main_imgs/arrow.png";
import time from "./../UI/main_imgs/time.png";
import quality from "./../UI/main_imgs/quality.png";
import protect from "./../UI/main_imgs/protect.png";
import Larry from "./../UI/main_imgs/Larry.png"
const Main = () => {
  return (
    <div className={css.main}>
      <section className={css.about_us}>
        <div className={css.about_containter} >
        <h1>сервис по поиску публикаций о компании по его ИНН</h1>
        <p>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</p>
        <button className={css.button}>Запросить данные</button>
        </div>
        <img src={Bobby} alt="ненужная картинка" />
      </section>
      <section className={css.whywe}><h2>Почему именно мы</h2>
      <div className={css.slider_container}>
      <img src={arrow} className={css.arrow} />
      <div className={css.slider_item}><img src={time} alt="save time" /><p>Высокая и оперативная скорость обработки заявки</p></div>
      <div className={css.slider_item}><img src={quality} alt="huge base" /><p>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</p></div>
      <div className={css.slider_item}><img src={protect} alt="safety" /><p>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</p></div>
      <img src={arrow} className={css.arrow} />
      </div>
      <div className={css.larry}><img src={Larry} alt="It's Larry"  /></div>
      </section>
      <section className={css.rates}>
        <h2>Наши тарифы</h2>
        <div className={css.rate_block}>
          <div className={css.rate_item}></div>
          <div className={css.rate_item}></div>
          <div className={css.rate_item}></div>
        </div>
      </section>
    </div>
  );
};
export default Main;
