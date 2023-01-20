import lavazza from 'src/assets/cardsImg/lavazza.webp';
import egoisteEspresso from "src/assets/cardsImg/egoisteEspresso.webp";
import lavazzaColumbia from "src/assets/cardsImg/lavazzaColumbia.webp";
import egoiste from "src/assets/cardsImg/egoiste.webp";
import bushidoColumbia from "src/assets/cardsImg/bushidoColumbia.webp";
import bushido from "src/assets/cardsImg/bushido.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.scss";

import { Navigation } from "swiper";

interface SwiperInterface {
    style: React.CSSProperties | undefined
}

export default function App({ style }: SwiperInterface) {

    return (
        <section className='swiperSection' style={style}>
            <div className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img className="swapImg" src={lavazza} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={egoisteEspresso} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={lavazzaColumbia} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={egoiste} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={bushidoColumbia} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={bushido} alt="coffee" /></SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
}



