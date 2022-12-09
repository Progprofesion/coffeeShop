import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import './swap.scss';

import AROMISTICOCoffee1kg from "src/assets/cardsImg/AROMISTICOCoffee1kg.svg";
import EvaDiaKenyaGrinders from "src/assets/cardsImg/EvaDiaKenyaGrinders.jpg"
import LavazzaTierra1KG from "src/assets/cardsImg/LavazzaTierra1KG.jpg";
import LORCremaAbsoluClassique from 'src/assets/cardsImg/LORCremaAbsoluClassique.webp';
import PrestoCoffeeBeans1kg from "src/assets/cardsImg/PrestoCoffeeBeans1kg.svg";
import SolimoCooffeeBeans2kg from "src/assets/cardsImg/SolimoCooffeeBeans2kg.svg";

export default () => {
    return (
        <div className="swap">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide><img className="swapImg" src='https://about-tea.ru/wp-content/uploads/d/4/1/d4103f7ca3583352ce2078b29e0fa262.jpeg' alt="coffee" /></SwiperSlide>
                <SwiperSlide><img className="swapImg" src={EvaDiaKenyaGrinders} alt="coffee" /></SwiperSlide>
                <SwiperSlide><img className="swapImg" src='https://ra-karandash.ru/wp-content/uploads/2017/10/%D0%A3%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BA%D0%BE%D1%84%D0%B5_Parrada_5.jpg' alt="coffee" /></SwiperSlide>
                <SwiperSlide><img className="swapImg" src={LORCremaAbsoluClassique} alt="coffee" /></SwiperSlide>
                <SwiperSlide><img className="swapImg" src="http://micahhansen.com/wp-content/uploads/2017/01/Fiddlers-Coffee-bag-01.jpg" alt="coffee" /></SwiperSlide>
                <SwiperSlide><img className="swapImg" src="https://kofe78.ru/image/cache/data/Vergnano_new/Vergnano%20Espresso%201%20kg-800x800.jpg" alt="coffee" /></SwiperSlide>
            </Swiper>
        </div>
    );
};