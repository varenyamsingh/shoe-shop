import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/HeroSection/Hero";
import NavBar from "./components/NavBar/NavBar";
import ProductCard from "./components/Products/ProductCard";
import ShoesList from "./components/ShoesList/ShoesList";

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero />
      <ProductCard/>
      <ShoesList/>
      <Footer/>
    </div>
  );
};

export default App;
