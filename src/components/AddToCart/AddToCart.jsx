import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./AddToCart.css";

const AddToCart = () => {
  const { cartItems, updateQty, removeFromCart } = useContext(CartContext);

  // convert "13,295.00" -> 13295
  const parsePrice = (price) => Number(price.replace(/,/g, ""));

  const total = cartItems.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.qty,
    0
  );

  return (
    <div className="cart-page container">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Price: ₹ {item.price}</p>
              <div className="qty-controls">
                <button onClick={() => updateQty(item.id, "dec")}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.id, "inc")}>+</button>
              </div>
              <p>Total: ₹ {parsePrice(item.price) * item.qty}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}

      <h3>Grand Total: ₹ {total}</h3>
    </div>
  );
};

export default AddToCart;
