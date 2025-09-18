import "./ProductCard.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProductCard = ({ shoe }) => {
  if (!shoe) return null;

  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(shoe);
    setAdded(true);
    setTimeout(() => setAdded(false), 3000); 
  };

  return (
    <div className="product-card">
      <img src={shoe.img} alt={shoe.name} />
      <p className="label" style={{ color: shoe.label === "Bestseller" ? "orange" : "red" }}>
        {shoe.label}
      </p>
      <h3>{shoe.name}</h3>
      <p>{shoe.category}</p>
      <p>MRP : ₹ {shoe.price}</p>

      <button onClick={handleAdd}>
        {added ? "Added to Cart" : "Add to Cart"}
      </button>
      <button>Buy Now</button>
    </div>
  );
};

export default ProductCard;
