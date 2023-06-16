import css from "./Slider.module.css";
import arrow from "./ui/arrow.png";
import time from '../../components/UI/main_imgs/time.png'
import quality from '../../components/UI/main_imgs/quality.png'
import protect from '../../components/UI/main_imgs/protect.png'

const Slider = () => {


    const slideItem =  [{
           image: time,
           description: "Высокая и оперативная скорость обработки заявки",
           id: 1,
           }
         ,
         {
              image: quality,
           description: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
           id: 2,
           } 
            ,
           {
                image: protect,
             description: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
             id: 3,
             }] ;
  
      





  const prevSlide = () => {
    console.log("prev");
  };
  const nextSlide = () => {
    console.log("next");
  };

  return (
    <div className={css.slider_container}>
      <img src={arrow} className={css.arrow} onClick={prevSlide} />
      {slideItem.map((slide) => (
        <div className={css.slider_item} key={slide.id}>
          <img src={slide.image} />
          <p>{slide.description}</p>
        </div>
      ))}

      <img src={arrow} className={css.arrow} onClick={nextSlide} />
    </div>
  );
};

export default Slider;
