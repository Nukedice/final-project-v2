import css from "./search.module.css";
import rocketman from "./../UI/search/rocketman.png";
import document from "./../UI/search/Document.png";
import folder from "./../UI/search/Folders.png";

const SearchPage = () => {
  return (
    <section className={css.search}>
      <h1 className={css.header}>
        Найдите необходимые <br /> данные в пару кликов.
      </h1>
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
      <div className={css.checkbox}>
      <input type="checkbox" id="1" name="scales" />
      <label for="1">Признак максимальной полноты</label>
    </div>
    <div className={css.checkbox}>
      <input type="checkbox" id="2" name="scales" />
      <label for="2">Упоминания в бизнес-контексте</label>
    </div>
    <div className={css.checkbox}>
      <input type="checkbox" id="3" name="scales" />
      <label for="3">Главная роль в публикации</label>
    </div>
    <div className={css.checkbox}>
      <input type="checkbox" id="4" name="scales" />
      <label for="4">Публикации только с риск-факторами</label>
    </div>
    <div className={css.checkbox}>
      <input type="checkbox" id="5" name="scales" />
      <label for="5">Включать технические новости рынков</label>
    </div>
    <div className={css.checkbox}>
      <input type="checkbox" id="6" name="scales" />
      <label for="6">Включать анонсы и календари</label>
    </div>
    <div className={css.checkbox}>
      <input type="checkbox" id="7" name="scales" />
      <label for="7">Включать сводки новостей</label>
    </div>
    <button className={css.search_button}>Поиск</button>
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
export default SearchPage;
