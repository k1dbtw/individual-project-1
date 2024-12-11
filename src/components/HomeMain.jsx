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
import img1 from "../assets/imgs/1.jpg";
import img2 from "../assets/imgs/2.jpg";
import fb from "../assets/imgs/facebook.svg";
import ig from "../assets/imgs/instagram.svg";
import { useNavigate } from "react-router-dom";

function HomeMain() {
  const navigate = useNavigate();

  const handleNavigateToProducts = () => {
    navigate("/stocks"); 
  };

  const handleNavigateToDelivery = () => {
    navigate("/delivery"); 
  };

  const handleSpecialOffersClick = () => {
    alert("Акции и спецпредложения закончились");
  };

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
          <button className="home__main-btn bag">Папки портфели</button>
        </div>
        <div className="home__main-item">
          <button className="home__main-btn markers">Маркеры</button>
        </div>
        <div className="home__main-item">
          <button className="home__main-btn penal">
            Пеналы для школьников
          </button>
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
        </div>

        <div className="container-right">
          <h3 className="container-right-title">Полезно знать</h3>
          <div className="container-right-item">
            <img
              src={img1} 
              alt="Article 1"
              className="container-right-item-img"
            />
            <p
              className="container-right-item-text"
              onClick={handleNavigateToProducts}
            >
              Канцелярские товары: разнообразные и полезные предметы, изделия и
              другие мелочи
            </p>
          </div>
          <div className="container-right-item">
            <img
              src={img2} // Замените на актуальный путь к изображению
              alt="Article 2"
              className="container-right-item-img"
            />
            <p
              className="container-right-item-text"
              onClick={handleNavigateToProducts}
            >
              Ручки: современные инструменты для письма, рисования и черчения
            </p>
          </div>
        </div>
      </div>
      <h1 className="home__main-loc">Наши филиалы</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069717.665878618!2d64.79163652500002!3d41.29208470000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ac5c307af75%3A0x4331c56738828d38!2zS2Fuc3RpayBNaXJhYmFkINCa0LDQvdGG0YLQvtCy0LDRgNGL!5e0!3m2!1sru!2s!4v1732859931320!5m2!1sru!2s"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <hr />
    </>
  );
}

export default HomeMain;
