import css from "./Slider.module.css";
import time from "../../pages/main/ui/time.png";
import quality from "../../pages/main/ui/quality.png";
import protect from "../../pages/main/ui/protect.png";
import Arrow from "../../ui/arrow/arrow";
const Slider = () => {
  const slideItem = [
    {
      image: time,
      description: "Высокая и оперативная скорость обработки заявки",
      id: 1,
    },
    {
      image: quality,
      description:
        "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
      id: 2,
    },
    {
      image: protect,
      description:
        "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
      id: 3,
    },
  ];

  const prevSlide = () => {
    console.log("prev");
  };
  const nextSlide = () => {
    console.log("next");
  };

  return (
    <div className={css.slider_container}>
      <Arrow direction={"left"} onClick={prevSlide}/>
      {slideItem.map((slide) => (
        <div className={css.slider_item} key={slide.id}>
          <img src={slide.image} />
          <p>{slide.description}</p>
        </div>
      ))}
      <Arrow direction={"right"} onClick={nextSlide}/>
    </div>
  );
};

export default Slider;
