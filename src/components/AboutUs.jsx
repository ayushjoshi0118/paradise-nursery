import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

export default function AboutUs() {
  return (
    <main className="about-page">
      <section className="about-content">
        <div className="brand-mark" style={{ background: "#edf6e9", color: "#2f7d42", borderColor: "#cfe0ca" }}>
          <Leaf size={30} />
        </div>
        <h1>About Paradise Nursery</h1>
        <p>
          Paradise Nursery is an online plant shop created for people who want
          to bring more greenery into their homes. We offer a curated selection
          of indoor plants suitable for bedrooms, living rooms, offices, and
          other spaces.
        </p>
        <p>
          Our goal is to make choosing houseplants simple and enjoyable. Every
          product in our catalogue includes a clear name, description, image,
          and price so customers can make informed choices.
        </p>
        <p>
          Whether you are an experienced plant parent or buying your first
          houseplant, Paradise Nursery helps you discover plants that can make
          your space feel fresh and welcoming.
        </p>
        <Link to="/plants" className="primary-button">
          Explore Plants
        </Link>
      </section>
    </main>
  );
}
