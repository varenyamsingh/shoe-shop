import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/HeroSection/Hero";
import ShoesList from "./components/ShoesList/ShoesList";
import Footer from "./components/Footer/Footer";
import AddToCart from "./components/AddToCart/AddToCart";

import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ShoesList />
              </>
            }
          />
          <Route path="/cart" element={<AddToCart />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
