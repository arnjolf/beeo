export default function ProductCard({ card }) {
  function onClickBtn() {
    console.log("все получится!");
  }

  return (
    <div className="card">
      <img className="card__img" src={card.image} alt="Изображение товара" />
      <div className="card__content">
        <h3 className="card__name">{card.name}</h3>
        <p className="card__text">{card.text}</p>
        <p className="card__price">{card.price}</p>
      </div>
      <div className="card__actions">
        <button onClick={onClickBtn} className="card__button card__button_more">
          Подробнее
        </button>
        <button onClick={onClickBtn} className="card__button card__button_buy">
          Купить
        </button>
      </div>
    </div>
  );
}
