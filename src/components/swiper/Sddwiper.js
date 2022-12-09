// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.scss';
import AROMISTICOCoffee1kg from "src/assets/cardsImg/AROMISTICOCoffee1kg.svg";
import EvaDiaKenyaGrinders from "src/assets/cardsImg/EvaDiaKenyaGrinders.jpg"
import LavazzaTierra1KG from "src/assets/cardsImg/LavazzaTierra1KG.jpg";
import LORCremaAbsoluClassique from "src/assets/cardsImg/LORCremaAbsoluClassique.webp";
import PrestoCoffeeBeans1kg from "src/assets/cardsImg/PrestoCoffeeBeans1kg.svg";
import SolimoCooffeeBeans2kg from "src/assets/cardsImg/SolimoCooffeeBeans2kg.svg";

const Sddwiper = () => {
    const swiper = new Swiper('.swiper', {

        modules: [Navigation, Pagination],
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });


    return (
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src={AROMISTICOCoffee1kg} alt="" />
                </div>
                <div class="swiper-slide">
                    <img src={EvaDiaKenyaGrinders} alt="" />
                </div>
                <div class="swiper-slide">
                    <img src={LavazzaTierra1KG} alt="" />
                </div>
                <div class="swiper-slide">
                    <img src={LORCremaAbsoluClassique} alt="" />
                </div>
                <div class="swiper-slide">
                    <img src={PrestoCoffeeBeans1kg} alt="" />
                </div>
                <div class="swiper-slide">
                    <img src={SolimoCooffeeBeans2kg} alt="" />
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-scrollbar"></div>
        </div>
    )

}

export default Sddwiper;

// init Swiper:







