import Anastasia from "../../images/AnastasiaCompany.jpg";

export default function Company() {
  return (
    <section className="company">
      <img className="company__image" alt="Анастасия" src={Anastasia}></img>
      <h3 className="company__title">Анастасия Васькевич</h3>
      <p className="company__subtitle">создатель BEEO</p>
      <div className="company__info">
        <p className="company__text">
          BEEO(www.beeo.su) - это интернет-магазин продуктов для ухода за телом,
          оффлайн точки полностью отсутствуют. Мы отправляем посылки по всей
          России по фиксированной стоимости доставки. Собственное производство
          сосредоточено в небольшом хуторе под Горячим Ключом, Краснодарского
          Края.
        </p>
        <p className="company__text">
          Все продукты произведены вручную из натуральных ингредиентов или
          ингредиентов натурального происхождения, мы исключили сомнительные
          ингредиенты, но при этом сохранили эффективность продуктов.
        </p>
        <p className="company__text">
          Мы ведем выгодную ценовую политику для наших покупателей и
          предоставляем возможность использовать безопасные, но эффективные
          продукты в каждодневной рутине ухода за телом.
        </p>
      </div>
    </section>
  );
}
