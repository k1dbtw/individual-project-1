import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../assets/css/home.css";
import banner1 from "../assets/imgs/banner11.jpg";
import banner2 from "../assets/imgs/banner22.jpg";
import banner3 from "../assets/imgs/banner33.jpg";
import HomeMain from "../components/HomeMain"

const Home = () => {
  return (
    <div className="home-banner">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        slidesPerView={1} 
        className="home-banner-swiper"
      >
        <SwiperSlide>
          <div className="banner-slide" style={{ backgroundColor: "#1E2A78" }}>
            <img src={banner1} alt="Slide 1" className="slide-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide" style={{ backgroundColor: "#2A5197" }}>
            <img src={banner2} alt="Slide 2" className="slide-image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="banner-slide" style={{ backgroundColor: "#3C73C0" }}>
            <img src={banner3} alt="Slide 3" className="slide-image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;