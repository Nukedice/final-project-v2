import css from "./Slider.module.css";
import Arrow from "../../ui/Arrow/arrow";
const Slider = ({children}) => {
const slideItem = children

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
