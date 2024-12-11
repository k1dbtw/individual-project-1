import fb from "../assets/imgs/facebook.svg";
import ig from "../assets/imgs/instagram.svg";
import "../assets/css/company.css"

const AboutCompany = () => {
  return (
    <div style={{ fontFamily: "'Roboto', sans-serif", color: "#333" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "20px", fontWeight: "bold", marginLeft: '20px', marginTop:'10px' }}>Наша компания</h1>
      <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
        <strong>Компания Kanstik</strong> — ведущая сеть магазинов канцелярских принадлежностей для офиса и школы в
        Узбекистане. Уже более 15 лет обеспечиваем клиентов всем необходимым для организации эффективного рабочего
        процесса.
      </p>
      <br />
      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
        Начиная с 2007 года наша сеть развивается и расширяется, а в данный период является одной из крупнейших сетей
        магазинов в Узбекистане.
      </p>
      <br />
      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
        Kanstik – это огромный выбор письменных принадлежностей, офисной канцелярии, а также товаров для школы и
        творчества, удовлетворяющих потребностям даже самых требовательных покупателей.
      </p>
      <br />
      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
        Канцелярские принадлежности таких известных брендов как: Deli, Maped, Uni-ball, Lori, Луч, Hatber, Schneider,
        SvetoCopy изготавливаются на лучших фабриках Европы и Азии с использованием экологичных материалов и современных
        технологий.
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
        Вся продукция проходит строгий контроль на соответствие стандартам качества и безопасности.
      </p>
      <br />
      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
        ООО «Kanstik» — сеть состоящая из 14 собственных магазинов и 7 магазинов, открытых по франшизе за 2023 год.
        Насчитывает в своем штате более 60 сотрудников.
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.8" }}>
        Ассортимент магазинов Kanstik включает более 5000 товаров в таких категориях, как:
      </p>
      <br />
      <ul className="list" style={{ fontSize: "16px", lineHeight: "1.8", listStyleType: "disc", paddingLeft: "20px", marginBottom: "20px" }}>
        <li>Бумажная продукция</li>
        <li>Канцтовары</li>
        <li>Письменные принадлежности</li>
        <li>Офисная техника</li>
        <li>Хозяйственные товары</li>
        <li>Товары для школы</li>
        <li>Товары премиум-класса</li>
        <li>Художественные товары</li>
      </ul>
    </div>
  );
};

export default AboutCompany;