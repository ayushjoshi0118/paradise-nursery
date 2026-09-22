import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    window.alert("Coming Soon! Checkout functionality will be available soon.");
  };

  if (cartItems.length === 0) {
    return (
      <main className="page-shell cart-page">
        <header className="cart-header">
          <h2>Shopping Cart</h2>
          <p>Your selected plants will appear here.</p>
        </header>

        <section className="empty-cart">
          <ShoppingBag size={48} color="#3c7949" />
          <h3>Your cart is empty</h3>
          <p>Add some beautiful plants to get started.</p>
          <Link to="/plants" className="primary-button">
            Continue Shopping
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell cart-page">
      <header className="cart-header">
        <h2>Shopping Cart</h2>
        <p>
          {totalItems} {totalItems === 1 ? "item" : "items"} in your cart.
        </p>
      </header>

      <div className="cart-layout">
        <section className="cart-items">
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <article className="cart-row" key={item.id}>
                <img
                  className="cart-image"
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-product">
                  <h3>{item.name}</h3>
                  <p className="unit-price">
                    Unit price: ${item.price.toFixed(2)}
                  </p>
                </div>

                <div className="quantity-control">
                  <button
                    className="quantity-button"
                    aria-label={`Decrease ${item.name} quantity`}
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    <Minus size={15} />
                  </button>

                  <span className="quantity-value">{item.quantity}</span>

                  <button
                    className="quantity-button"
                    aria-label={`Increase ${item.name} quantity`}
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    <Plus size={15} />
                  </button>
                </div>

                <div className="item-total">
                  ${itemTotal.toFixed(2)}
                </div>

                <button
                  className="delete-button"
                  aria-label={`Delete ${item.name}`}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Trash2 size={19} />
                </button>
              </article>
            );
          })}
        </section>

        <aside className="summary-card">
          <h3>Order Summary</h3>

          <div className="summary-line">
            <span>Total items</span>
            <span>{totalItems}</span>
          </div>

          <div className="summary-line">
            <span>Subtotal</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="summary-total">
            <span>Total</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>

          <Link to="/plants" className="continue-button">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </main>
  );
}
