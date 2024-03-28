import ProductCard from "../ProductCard/ProductCard";

export default function Gallery({ cardArray }) {
  return (
    <section className="gallery">
      {cardArray.map((card, ind) => {
        return <ProductCard card={card} key={ind} />;
      })}
    </section>
  );
}
