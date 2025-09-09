import "./ProductCard.css";

const ProductCard = ({ shoe }) => {
  if (!shoe) return null;

  return (
    <div className="product-card">
      <img src={shoe.img} alt={shoe.name} />
      <p className="label" style={{ color: shoe.label === "Bestseller" ? "orange" : "red" }}>
        {shoe.label}
      </p>
      <h3>{shoe.name}</h3>
      <p>{shoe.category}</p>
      <p>MRP : ₹ {shoe.price}</p>
    </div>
  );
};

export default ProductCard;
