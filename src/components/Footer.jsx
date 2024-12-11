import fb from "../assets/imgs/facebook.svg";
import ig from "../assets/imgs/instagram.svg";
import "../assets/css/footer.css"

const Footer = ({ handleSpecialOffersClick, handleNavigateToDelivery }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Компания</h4>
          <ul>
            <li>
              <a href="#">О компании</a>
            </li>
            <li>
              <a href="https://t.me/k1dbtw2k">Контакты</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Информация</h4>
          <ul>
            <li>
              <a href="#" onClick={handleSpecialOffersClick}>
                Акции и спецпредложения
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Помощь</h4>
          <ul>
            <li>
              <a href="#" onClick={handleNavigateToDelivery}>Доставка и оплата</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Контакты</h4>
          <p>📍 Ташкент, Мирабадский р-н, ул. Авлиё Ота, 7</p>
          <p>
            📞 <a href="tel:+998781470101">+998 (78) 147-01-01</a>
          </p>
          <p>
            <a href="#">Заказать звонок</a>
          </p>
        </div>
        <div className="footer-column footer-subscribe">
          <h4>Мы в социальных сетях</h4>
          <div className="social-icons">
            <a href="https://www.facebook.com/kanstik">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/kanstik/">
              <img src={ig} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        2007 - 2024 © Интернет-магазин "Kanstik" |{" "}
        <a href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  );
};

export default Footer;
