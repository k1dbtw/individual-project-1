import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../assets/css/homemain.css";
import card1 from "../assets/imgs/card1.png";
import card2 from "../assets/imgs/card2.jpg";
import card3 from "../assets/imgs/card3.png";
import card4 from "../assets/imgs/card4.png";
import card5 from "../assets/imgs/card5.jpg";
import card6 from "../assets/imgs/card6.jpg";
import card7 from "../assets/imgs/card7.png";
import logo from "../assets/imgs/hey.jpg";
import img1 from "../assets/imgs/1.jpg"
import img2 from "../assets/imgs/2.jpg"


function HomeMain() {
  return (
    <>
      <div className="home__main-span">
        <span>Мы рекомендуем</span>
      </div>
      <div className="home__main-title">
        <h1>Популярные категории</h1>
      </div>
      <div className="home__main-container">
        <div className="home__main-item">
          <button className="home__main-btn">Папки портфели</button>
          <h2 className="home__main-desc">
            Удобные портфели для хранение документов
          </h2>
        </div>
        <div className="home__main-item">
          <button className="home__main-btn">Маркеры</button>
          <h2 className="home__main-desc">Письменные принадлежности</h2>
        </div>
        <div className="home__main-item">
          <button className="home__main-btn">Пеналы для школьников</button>
          <h2 className="home__main-desc">Пеналы для школьников и наборы</h2>
        </div>
      </div>
      <div className="home__main-cards">
        <Swiper
          slidesPerView={6}
          spaceBetween={20}
          className="home__main-swiper"
        >
          <SwiperSlide>
            <div className="banner-slide1">
              <img src={card1} alt="Slide 1" className="slide-image" />
              <h1 className="slide-title">
                В честь своего дня рождения мы не принимаем, а дарим подарки
              </h1>
              <button className="slide-btn">Акция закончилась</button>
              <p className="slide-desc">
                В честь своего дня рождения мы не принимаем, а дарим подарки И
                не один – мы запускаем розыгрыш целых 15 крутых призов, в числе
                которых: 1️⃣ Телефон Mi 10PRO 2️⃣ Яндекс станции LITE 1️⃣2️⃣ Наборов
                канцтоваров KanstikBOX
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide1">
              <img src={card2} alt="Slide 1" className="slide-image" />
              <h1 className="slide-title">Школьный базар 2024</h1>
              <button className="slide-btn">Акция закончилась</button>
              <p className="slide-desc">
                Школьный базар вместе с Kanstik! Скачайте мобильное приложение
                Канстик бонус, покупайте товары для школы на сумму от 500.000
                сум и получайте cashback до 10% на бонусную карту. А также
                возможность выиграть крутые призы! Акция действует с 1 августа
                до 15 сентября!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide1">
              <img src={card3} alt="Slide 1" className="slide-image" />
              <h1 className="slide-title">9 мая</h1>
              <button className="slide-btn">Акция закончилась</button>
              <p className="slide-desc">
                КОНКУРС!
                <br />
                <br />
                Друзья, в преддверии 9 мая, мы решили провести конкурс и
                разыграть крутые призы, а именно:
                <br />
                <br />
                Витражные краски "Луч" для 15 победителей!
                <br />
                <br />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide1">
              <img src={card4} alt="Slide 1" className="slide-image" />
              <h1 className="slide-title">
                "Лучшее оформление новогодней ёлки"
              </h1>
              <button className="slide-btn">Акция закончилась</button>
              <p className="slide-desc">
                Конкурс
                <br />
                "Лучшее оформление новогодней ёлки"
                <br />
                <br />
                Выбираем 10 самых красивых ёлок и дарим новогоднее настроение в
                виде подарочных наборов!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide1">
              <img src={card5} alt="Slide 1" className="slide-image" />
              <h1 className="slide-title">Акция "Испытай удачу с Kanstik"</h1>
              <button className="slide-btn">Акция закончилась</button>
              <p className="slide-desc">
                Сеть-магазинов “KANSTIK” приглашает Вас принять участие в акции”
                ИСПЫТАЙ УДАЧУ C KANSTIK”.
                <br />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide1">
              <img src={card6} alt="Slide 1" className="slide-image" />
              <h1 className="slide-title">
                Конкурс "Мистер и Мисс Первоклашки 2024"
              </h1>
              <button className="slide-btn">Акция закончилась</button>
              <p className="slide-desc">
                Ваш ребенок пошел в первый класс? Скорее всего у него масса
                эмоций и новых впечатлений.
                <br />
                И вы конечно запечатлели их.
                <br />
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide1">
              <img src={card7} alt="Slide 1" className="slide-image" />
              <h1 className="slide-title">
                Школьный Базар 2024 + Акция "Приведи друга"
              </h1>
              <button className="slide-btn">Акция закончилась</button>
              <p className="slide-desc">
                Акция «Приведи друга» проходит в сети магазинов Kanstik в период
                с 1 августа по 15 сентября и распространяется только при покупке
                товаров для школы из следующих категорий:
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="container">
        <div className="container-left">
          <div className="container-left-main">
            <img src={logo} alt="" className="container-left-main-img" />
          </div>
          <h3 className="container-left-title">О Kanstik</h3>
          <p className="container-left-desc">
            Kanstik - это огромный выбор письменных принадлежностей, офисной
            канцелярии, а также товаров для школы и творчества, удовлетворяющих
            потребностям даже самых требовательных покупателей. Канцелярские
            принадлежности таких известных брендов как: Deli, Maped, Uni-ball,
            Lori, Луч, Hatber, Schneider, SvetoCopy изготавливаются на лучших
            фабриках Европы и Азии с использованием экологичных материалов и
            современных технологий.
          </p>
          <button className="container-left-btn">Подробнее</button>
        </div>

        <div className="container-right">
          <h3 className="container-right-title">Полезно знать</h3>
          <div className="container-right-item">
            <img
              src={img1}
              alt="Article 1"
              className="container-right-item-img"
            />
            <p className="container-right-item-text">
              Канцелярские товары: разнообразные и полезные предметы, изделия и
              другие мелочи
            </p>
          </div>
          <div className="container-right-item">
            <img
              src={img2}
              alt="Article 2"
              className="container-right-item-img"
            />
            <p className="container-right-item-text">
              Ручки: современные инструменты для письма, рисования и черчения
            </p>
          </div>
          <button className="container-right-btn">Все статьи</button>
        </div>
      </div>
    </>
  );
}

export default HomeMain;