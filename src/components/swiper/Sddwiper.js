// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/scss';
// import './swap.scss';
// import 'swiper/css/mousewheel';


import lavazza from 'src/assets/cardsImg/lavazza.jpg';
import leboCenia from "src/assets/cardsImg/leboCenia.jpg";
import lavazzaColumbia from "src/assets/cardsImg/lavazzaColumbia.jpg";
import egoiste from "src/assets/cardsImg/egoiste.jpg";
import bushidoColumbia from "src/assets/cardsImg/bushidoColumbia.jpg";
import bushido from "src/assets/cardsImg/bushido.jpg";

// export default () => {
//     return (
//         <div className="swap">
//             <Swiper
//                 // install Swiper modules
//                 modules={[Navigation, Pagination, Scrollbar, A11y]}
//                 spaceBetween={50}
//                 mousewheel
//                 slidesPerView={1}
//                 navigation
//                 centeredSlides={true}
//                 loop={true}
//                 pagination={{ clickable: true }}
//                 scrollbar={{ draggable: true }}
//                 onSwiper={(swiper) => console.log(swiper)}
//                 onSlideChange={() => console.log('slide change')}
//             >

//                 <SwiperSlide><img className="swapImg" src={lavazza} alt="coffee" /></SwiperSlide>
//                 <SwiperSlide><img className="swapImg" src={leboCenia} alt="coffee" /></SwiperSlide>
//                 <SwiperSlide><img className="swapImg" src={lavazzaColumbia} alt="coffee" /></SwiperSlide>
//                 <SwiperSlide><img className="swapImg" src={egoiste} alt="coffee" /></SwiperSlide>
//                 <SwiperSlide><img className="swapImg" src={bushidoColumbia} alt="coffee" /></SwiperSlide>
//                 <SwiperSlide><img className="swapImg" src={bushido} alt="coffee" /></SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function App() {
    return (

        <>
            <div className="container">
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
                    <SwiperSlide><img className="swapImg" src={leboCenia} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={lavazzaColumbia} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={egoiste} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={bushidoColumbia} alt="coffee" /></SwiperSlide>
                    <SwiperSlide><img className="swapImg" src={bushido} alt="coffee" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}