import lavazza from 'src/assets/cardsImg/lavazza.jpg';
import egoisteEspresso from "src/assets/cardsImg/egoisteEspresso.jpg";
import lavazzaColumbia from "src/assets/cardsImg/lavazzaColumbia.jpg";
import egoiste from "src/assets/cardsImg/egoiste.jpg";
import bushidoColumbia from "src/assets/cardsImg/bushidoColumbia.jpg";
import bushido from "src/assets/cardsImg/bushido.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.scss";

import { Navigation } from "swiper";

interface Swiper {
    style: object,
}

export default function App({ style }: Swiper) {

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



