import "./NavBar.css"
import { MdOutlineAddShoppingCart } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="container">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="brand-logo" />
      </div>
      <ul>
        <li href="#">Menu</li>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
        <li href='#'>Cart</li>
        {/* <MdOutlineAddShoppingCart/> */}
      </ul>

      <button>login</button>
    </nav>
  );
};

export default NavBar;
