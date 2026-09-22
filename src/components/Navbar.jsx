import { Link } from "react-router-dom";
import { Leaf, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <Leaf size={24} />
        <span>Paradise Nursery</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link" aria-label="Shopping cart">
          <ShoppingCart size={20} />
          Cart
          <span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}
