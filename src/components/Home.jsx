import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Подключение стилей Swiper

// Опционально подключите модули Swiper
// import { Navigation, Pagination, Scrollbar } from 'swiper';

const Home = () => {
  const slides = ['Слайд 1', 'Слайд 2', 'Слайд 3', 'Слайд 4'];

  return (
    <div>
      <h1>Домашний Слайдер</h1>
      <Swiper
        // modules={[Navigation, Pagination, Scrollbar]} // Подключение модулей
        spaceBetween={50} // Расстояние между слайдами
        slidesPerView={1} // Количество слайдов на экране
        navigation // Навигация "вперед-назад"
        pagination={{ clickable: true }} // Клики на пагинацию
        scrollbar={{ draggable: true }} // Прокручиваемая полоса
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
