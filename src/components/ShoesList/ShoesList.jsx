import ProductCard from "../Products/ProductCard";
import "./ShoesList.css";

const ShoesList = () => {
  const shoes = [
    {
      id: 1,
      name: "Nike Vaporfly 4",
      category: "Men's Road Racing Shoes",
      price: "21,495.00",
      label: "Promo Exclusion",
      img: "/images/shoe1.jpeg",
    },
    {
      id: 2,
      name: "Nike Vomero 18",
      category: "Men's Road Running Shoes",
      price: "13,295.00",
      label: "Promo Exclusion",
      img: "/images/shoe2.jpeg",
    },
    {
      id: 3,
      name: "Nike Streakfly 2",
      category: "Road Racing Shoes",
      price: "16,995.00",
      label: "Bestseller",
      img: "/images/shoe3.jpeg",
    },
    {
      id: 4,
      name: "Nike Shox R4 SE",
      category: "Men's Road Racing Shoes",
      price: "14,995.00",
      label: "Promo Exclusion",
      img: "/images/shoe4.jpeg",
    },
    {
      id: 5,
      name: "Nike Air Max TL 2.5",
      category: "Men's Road Running Shoes",
      price: "7,595.00",
      label: "Promo Exclusion",
      img: "/images/shoe5.jpeg",
    },
    {
      id: 6,
      name: "Nike V5 RNR",
      category: "Road Racing Shoes",
      price: "14,995.00",
      label: "Bestseller",
      img: "/images/shoe6.jpeg",
    },
    {
      id: 7,
      name: "Nike Gato",
      category: "Men's Road Racing Shoes",
      price: "9,695.00",
      // label: "Promo Exclusion",
      img: "/images/shoe7.jpeg",
    },
    {
      id: 8,
      name: "Nike Tera Manta",
      category: "Men's Road Running Shoes",
      price: "7,495.00",
      label: "Promo Exclusion",
      img: "/images/shoe8.jpeg",
    },
    {
      id: 9,
      name: "Nike Air Max DN",
      category: "Road Racing Shoes",
      price: "14,595.00",
      label: "Bestseller",
      img: "/images/shoe9.jpeg",
    },
    {
      id: 10,
      name: "A 'One Birthday Cake' EP ",
      category: "Men's Road Racing Shoes",
      price: "9,695.00",
      label: "Promo Exclusion",
      img: "/images/shoe10.jpeg",
    },
    {
      id: 11,
      name: "A 'One Unapologetic' EP",
      category: "Men's Road Running Shoes",
      price: "9,595.00",
      // label: "Promo Exclusion",
      img: "/images/shoe11.jpeg",
    },
    {
      id: 12,
      name: "Nike Dunk Low Retro SE",
      category: "Road Racing Shoes",
      price: "10,795.00",
      label: "Bestseller",
      img: "/images/shoe12.jpeg",
    },
    {
      id: 13,
      name: "Nike Duke Low Retro SE",
      category: "Men's Road Racing Shoes",
      price: "10,795.00",
      // label: "Promo Exclusion",
      img: "/images/shoe13.jpeg",
    },
    {
      id: 14,
      name: "Nike Air Max 90 Premium",
      category: "Men's Road Running Shoes",
      price: "12,795.00",
      label: "Promo Exclusion",
      img: "/images/shoe14.jpeg",
    },
    {
      id: 15,
      name: "Nike Field General",
      category: "Road Racing Shoes",
      price: "8,695.00",
      label: "Bestseller",
      img: "/images/shoe15.jpeg",
    },
    {
      id: 16,
      name: "Nike Duke Low Retro SE",
      category: "Men's Road Racing Shoes",
      price: "10,795.00",
      // label: "Promo Exclusion",
      img: "/images/shoe16.jpeg",
    },
    {
      id: 17,
      name: "Nike Zoom Vomero 5 SE",
      category: "Men's Road Running Shoes",
      price: "15,995.00",
      label: "Promo Exclusion",
      img: "/images/shoe17.jpeg",
    },
    {
      id: 18,
      name: "Nike Air Max Plus",
      category: "Road Racing Shoes",
      price: "14,995.00",
      label: "Sustainable Material",
      img: "/images/shoe18.jpeg",
    },
  ];

  return (
    <div className="shoes-list">
      {shoes.map((shoe) => (
        <ProductCard key={shoe.id} shoe={shoe} />
      ))}
    </div>
  );
};

export default ShoesList;
