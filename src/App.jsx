import { Routes, Route, Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <div className="brand-mark"><Leaf size={30} /></div>
          <p className="eyebrow">WELCOME TO</p>
          <h1>Paradise Nursery</h1>
          <p className="landing-tagline">
            Bring the beauty of nature home with healthy, carefully selected
            houseplants for every room.
          </p>
          <Link to="/plants" className="primary-button">
            Get Started <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/plants"
        element={
          <>
            <Navbar />
            <ProductList />
          </>
        }
      />
      <Route
        path="/cart"
        element={
          <>
            <Navbar />
            <CartItem />
          </>
        }
      />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}
