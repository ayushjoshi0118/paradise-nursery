import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import plants from "../data/plants";

const categories = ["Indoor Plants", "Succulents", "Flowering Plants"];

export default function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const addedProductIds = new Set(cartItems.map((item) => item.id));

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <main className="page-shell">
      <header className="catalog-header">
        <p className="eyebrow" style={{ color: "#3c7949", letterSpacing: "2px" }}>
          SHOP OUR COLLECTION
        </p>
        <h2>Find Your Perfect Plant</h2>
        <p>
          Explore our collection of beautiful houseplants, succulents, and
          flowering plants for every corner of your home.
        </p>
      </header>

      {categories.map((category) => {
        const categoryPlants = plants.filter(
          (plant) => plant.category === category
        );

        return (
          <section className="category-section" key={category}>
            <div className="category-title">
              <h3>{category}</h3>
              <span />
            </div>

            <div className="product-grid">
              {categoryPlants.map((plant) => {
                const isAdded = addedProductIds.has(plant.id);

                return (
                  <article className="product-card" key={plant.id}>
                    <img
                      className="product-image"
                      src={plant.image}
                      alt={plant.name}
                      loading="lazy"
                    />

                    <div className="product-body">
                      <h4>{plant.name}</h4>
                      <p className="product-description">
                        {plant.description}
                      </p>

                      <div className="product-footer">
                        <span className="price">
                          ${plant.price.toFixed(2)}
                        </span>

                        <button
                          className="add-button"
                          onClick={() => handleAddToCart(plant)}
                          disabled={isAdded}
                        >
                          {isAdded ? "Added to Cart" : "Add to Cart"}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </main>
  );
}
