import lavazza from 'src/assets/cardsImg/lavazza.jpg';
import egoisteEspresso from "src/assets/cardsImg/egoisteEspresso.jpg";
import lavazzaColumbia from "src/assets/cardsImg/lavazzaColumbia.jpg";
import egoiste from "src/assets/cardsImg/egoiste.jpg";
import bushidoColumbia from "src/assets/cardsImg/bushidoColumbia.jpg";
import bushido from "src/assets/cardsImg/bushido.jpg";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.scss";

import { Pagination, Navigation } from "swiper";

export default function App({ style }) {

    const size = (e) => {
        e.preventDefault();
    };

    return (
        <section className='swiperSection' style={style}>
            <div onClick={e => size(e)} className="container">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
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


