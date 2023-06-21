import css from "./search.module.css";
import rocketman from "./assets/rocketman.png";
import document from "./assets/Document.png";
import folder from "./assets/Folders.png";
import Button from "../../ui/Button/Button";
import Checkbox from "../../ui/Checkbox/checkbox";
const Search = () => {
 const params = [ 
  {
    text : 'Признак максимальной полноты',
    id : 1
  }, {
    text : 'Упоминания в бизнес-контексте',
    id : 2
  }, {
    text : 'Главная роль в публикации',
    id : 3
  }, {
    text : 'Публикации только с риск-факторами',
    id : 4
  }, {
    text : 'Включать технические новости рынков',
    id : 5
  }, {
    text : 'Включать анонсы и календари',
    id : 6
  }, {
    text : 'Включать сводки новостей',
    id : 7
  },  
 ]


  return (
    <section className={css.search}>
      <h2>
        Найдите необходимые <br /> данные в пару кликов.
      </h2>
      <p className={css.rules}>Задайте параметры поиска. </p>
      <p className={css.rules}>Чем больше заполните, тем точнее поиск</p>
      <form className={css.search_form}>
        <div className={css.inputs}>
          <label for="INN" className={css.labels}>
            ИНН компании *
          </label>
          <input
            id="INN"
            type="number"
            name="INN"
            placeholder="10 цифр"
            min={"1000000000"}
            max={"9999999999"}
            required
            className={css.input}
          ></input>
          <label for="tone" className={css.labels}>
            Тональность
          </label>
          <select className={css.input}>
            <option>Любая</option>
            <option>ляминор</option>
            <option>лямажор</option>
          </select>
          <label for="docs" className={css.labels}>
          Количество документов в выдаче *
          </label>
          <input
            id="docs"
            type="number"
            name="INN"
            placeholder="От 1 до 1000"
            min={"1"}
            max={"1000"}
            required
            className={css.input}
          ></input>
          <div className={css.date}>
          <label for="date" className={css.labels}>
          Диапазон поиска *
          </label>
          <br />
          <input
            id="date"
            type="text"
            name="INN"
            placeholder="Дата начала"
            required
            className={css.date_input}
          ></input>
          <input
            id="date_end"
            type="text"
            name="INN"
            placeholder="Дата конца"
            required
            className={css.date_input}
          ></input>
          </div>
        </div>
        <div className={css.checkboxes}>
{params.map ((i) => (<Checkbox text={i.text} id={i.id}></Checkbox>))}
    <div className={css.search_button}><Button  text={'Поиск'}></Button></div>
    <span>* Обязательные к заполнению поля</span>
      </div>
      </form>
      
      <div className={css.image_block}>
        <img src={folder} className={css.folder} />
        <img src={document} className={css.document} />
        <img src={rocketman} alt="young Ilon Mask" className={css.Ilon} />
      </div>
    </section>
  );
};
export default Search;
