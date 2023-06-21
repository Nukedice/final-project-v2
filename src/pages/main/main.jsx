import css from "./main.module.css";
import Bobby from './ui/Bobby.png';
import idea from './ui/idea.png';
import Larry from './ui/Larry.png';
import hawkeye from './ui/hawkeye.png';
import laptop from './ui/laptop.png';
import Slider from "../../components/Slider/Slider";
import Button from "../../ui/Button/Button";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { slideItem } from "./assets/sliderItem";
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
          <div className={css.but_container}>
          <Link to='search'> <Button text={'Запросить данные'}/> </Link>
          </div>
        </div>
        <img src={Bobby} alt="ненужная картинка" />
      </section>
      <section className={css.whywe}>
        <h2>Почему именно мы</h2>
        <Slider children={slideItem}/>
        <div className={css.larry}>
          <img src={Larry} alt="It's Larry" />
        </div>
      </section>
      <section className={css.rates}>
        <h2>Наши тарифы</h2>
        <div className={css.rate_block}>
        <Card tariff={'Beginer'} price={'799 ₽'} oldprice={'1 200 ₽'} credit={'или 150 ₽/мес. при рассрочке на 24 мес.'} image={idea} color={'gray'} current={true}/>
        <Card tariff={'Pro'} price={'1 299 ₽'} oldprice={'2 600 ₽'} credit={'или 279 ₽/мес. при рассрочке на 24 мес.'} image={hawkeye} />
        <Card tariff={'Business'} price={'2 379 ₽'} oldprice={'3 700 ₽'} credit={'_'} image={laptop}/>
        </div>
      </section>
    </div>
  );
};
export default Main;
