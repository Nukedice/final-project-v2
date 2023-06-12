import css from "./main.module.css";
import Bobby from "./../UI/main_imgs/Bobby.png";
import arrow from "./../UI/main_imgs/arrow.png";
import time from "./../UI/main_imgs/time.png";
import quality from "./../UI/main_imgs/quality.png";
import protect from "./../UI/main_imgs/protect.png";
import Larry from "./../UI/main_imgs/Larry.png";
import idea from "./../UI/main_imgs/idea.png";
import hawkeye from "./../UI/main_imgs/hawkeye.png";
import laptop from "./../UI/main_imgs/laptop.png";
const Main = () => {
  return (
    <div className={css.main}>
      <section className={css.about_us}>
        <div className={css.about_containter}>
          <h1>сервис по поиску публикаций о компании по его ИНН</h1>
          <p>
            Комплексный анализ публикаций, получение данных в формате PDF на
            электронную почту.
          </p>
          <button className={css.button}>Запросить данные</button>
        </div>
        <img src={Bobby} alt="ненужная картинка" />
      </section>
      <section className={css.whywe}>
        <h2>Почему именно мы</h2>
        <div className={css.slider_container}>
          <img src={arrow} className={css.arrow} />
          <div className={css.slider_item}>
            <img src={time} alt="save time" />
            <p>Высокая и оперативная скорость обработки заявки</p>
          </div>
          <div className={css.slider_item}>
            <img src={quality} alt="huge base" />
            <p>
              Огромная комплексная база данных, обеспечивающая объективный ответ
              на запрос
            </p>
          </div>
          <div className={css.slider_item}>
            <img src={protect} alt="safety" />
            <p>
              Защита конфеденциальных сведений, не подлежащих разглашению по
              федеральному законодательству
            </p>
          </div>
          <img src={arrow} className={css.arrow} />
        </div>
        <div className={css.larry}>
          <img src={Larry} alt="It's Larry" />
        </div>
      </section>
      <section className={css.rates}>
        <h2>Наши тарифы</h2>
        <div className={css.rate_block}>
          <div className={css.rate_item}>
            <div className={css.card_head + " " + css.first_card}>
              <h3>Beginner</h3>
              <img src={idea} />
              <p>Для небольшого исследования</p>
            </div>
            <div className={css.current}>Текущий тариф</div>
            <div className={css.info_rate}>
              <span className={css.price}>799 ₽</span>
              <span className={css.old_price}>1 200 ₽</span>
              <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
              <span className={css.list_header}>В тариф входит:</span>
              <ul className={css.list}>
                <li>Безлимитная история запросов</li>
                <li>Безопасная сделка</li>
                <li>Поддержка 24/7</li>
              </ul>
              <button className={css.more + " " + css.active_rate }>Перейти в личный кабинет</button>
            </div>
          </div>
          <div className={css.rate_item}>
            <div className={css.card_head + " " + css.second_card}>
              <h3>Pro</h3>
              <img src={hawkeye} />
              <p>Для HR и фрилансеров</p>
            </div>
            <div className={css.info_rate}>
              <span className={css.price}>1 299 ₽</span>
              <span className={css.old_price}>2 600 ₽</span>
              <p>или 279 ₽/мес. при рассрочке на 24 мес.</p>
              <span className={css.list_header}>В тариф входит:</span>
              <ul className={css.list}>
                <li>Все пункты тарифа Beginner</li>
                <li>Экспорт истории</li>
                <li>Рекомендации по приоритетам</li>
              </ul>
              <button className={css.more}>Подробнее</button>
            </div>
          </div>

          <div className={css.rate_item}>
            <div className={css.card_head + " " + css.third_card}>
              <h3>Business</h3>
              <img src={laptop} />
              <p>Для корпоративных клиентов</p>
            </div>
            <div className={css.info_rate}>
              <span className={css.price}>2 379 ₽</span>
              <span className={css.old_price}>3 700 ₽</span>
              <p>или 150 ₽/мес. при рассрочке на 24 мес.</p>
              <span className={css.list_header}>В тариф входит:</span>
              <ul className={css.list}>
                <li>Все пункты тарифа Pro</li>
                <li>Безлимитное количество запросов</li>
                <li>Приоритетная поддержка</li>
              </ul>
              <button className={css.more}>Подробнее</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Main;
