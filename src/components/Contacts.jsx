import '../assets/css/contacts.css'
import fb from "../assets/imgs/facebook.svg";
import ig from "../assets/imgs/instagram.svg";

function Contacts() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95853.24796141608!2d69.21958104622935!3d41.34335437793946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ac5c307af75%3A0x4331c56738828d38!2zS2Fuc3RpayBNaXJhYmFkINCa0LDQvdGG0YLQvtCy0LDRgNGL!5e0!3m2!1sru!2s!4v1732601585119!5m2!1sru!2s"
        allowFullScreen 
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h4>Компания</h4>
            <ul>
              <li>
                <a href="#">О компании</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Информация</h4>
            <ul>
              <li>
                <a href="#">Акции и спецпредложения</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Помощь</h4>
            <ul>
              <li>
                <a href="#">Доставка и оплата</a>
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
              <a href="#">
                <img src={fb} alt="" />
              </a>
              <a href="#">
                <img src={ig} alt="" />
              </a>
            </div>
            <form className="subscribe-form">
              <label htmlFor="subscribe">Подписывайтесь на рассылку</label>
              <div className="subscribe-input">
                <input
                  id="subscribe"
                  type="email"
                  placeholder="Введите ваш e-mail"
                />
                <button type="submit">➤</button>
              </div>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          2007 - 2024 © Интернет-магазин "Kanstik" |{" "}
          <a href="#">Политика конфиденциальности</a>
        </div>
      </footer>
    </>
  );
}

export default Contacts;
