'use client';
// Styles
import styles from './Carousel.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Lib
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, A11y } from 'swiper/modules';

export type PopularCarouselProps = {
    cards: JSX.Element[];
};

export const Carousel = ({ cards }: PopularCarouselProps) => {
    return (
        <Swiper
            modules={[Autoplay, Navigation, A11y]}
            navigation
            spaceBetween={50}
            slidesPerView={'auto'}
            className={styles.carousel}
            loop={true}
            autoplay={{
                delay: 2500,
            }}
        >
            {cards.map((card, i) => (
                <SwiperSlide
                    className={styles.slide}
                    key={`popular-carousel-slide-${i}`}
                >
                    {card}
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
