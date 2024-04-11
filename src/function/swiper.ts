import type Swiper from "swiper"

interface SwiperElement{
    swiper?: Swiper
}

export function getSwiper(element: Element){
    const swiper = (element as SwiperElement).swiper;
    return swiper ?? null;
}

export function setSwiper(element: Element, swiper: Swiper){
    return ((element as SwiperElement).swiper = swiper);
}