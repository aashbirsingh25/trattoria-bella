import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

// Each dish has a category so we can filter. "veg" tag is optional.
const dishes = [
  { cat: "Starters", name: "Bruschetta al Pomodoro", desc: "Grilled bread, vine tomatoes, basil, garlic, olive oil.", price: "$9", veg: true, img: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?auto=format&fit=crop&w=400&q=80" },
  { cat: "Starters", name: "Antipasto Misto", desc: "Cured meats, marinated olives, cheeses, roasted peppers.", price: "$14", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" },
  { cat: "Pasta", name: "Spaghetti Carbonara", desc: "Guanciale, egg yolk, pecorino, cracked black pepper.", price: "$18", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=400&q=80" },
  { cat: "Pasta", name: "Tagliatelle al Ragù", desc: "Hand-rolled pasta, slow-cooked beef and pork ragù.", price: "$21", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80" },
  { cat: "Mains", name: "Pollo alla Parmigiana", desc: "Breaded chicken, San Marzano tomato, mozzarella.", price: "$24", img: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=400&q=80" },
  { cat: "Mains", name: "Branzino al Forno", desc: "Whole roasted sea bass, lemon, herbs, olive oil.", price: "$29", img: "https://images.unsplash.com/photo-1535140728325-a4d3707eee61?auto=format&fit=crop&w=400&q=80" },
  { cat: "Pizza", name: "Margherita", desc: "San Marzano tomato, fior di latte, fresh basil.", price: "$16", veg: true, img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=400&q=80" },
  { cat: "Pizza", name: "Diavola", desc: "Spicy salami, tomato, mozzarella, chilli oil.", price: "$19", img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80" },
  { cat: "Dolci", name: "Tiramisù", desc: "Espresso-soaked savoiardi, mascarpone, cocoa.", price: "$10", veg: true, img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=400&q=80" },
  { cat: "Dolci", name: "Panna Cotta", desc: "Vanilla cream, wild berry coulis.", price: "$9", veg: true, img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=400&q=80" },
];

const categories = ["All", "Starters", "Pasta", "Mains", "Pizza", "Dolci"];

function Menu() {
  const [filter, setFilter] = useState("All");

  // Show all dishes, or only those matching the selected category.
  const shown = filter === "All" ? dishes : dishes.filter((d) => d.cat === filter);

  return (
    <section id="menu" className="menu">
      <div className="container">
        <Reveal>
          <span className="eyebrow" style={{ textAlign: "center", display: "block" }}>Our Menu</span>
          <h2 className="section-title">Made with <em>Amore</em></h2>
          <p className="section-subtitle">Fresh, seasonal, and rooted in tradition. Buon appetito.</p>
        </Reveal>

        {/* Filter buttons */}
        <Reveal delay={0.1}>
          <div className="menu-filters">
            {categories.map((c) => (
              <button
                key={c}
                className={filter === c ? "active" : ""}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Dishes — animate as the filter changes */}
        <div className="menu-grid">
          <AnimatePresence mode="popLayout">
            {shown.map((d) => (
              <motion.div
                key={d.name}
                className="dish"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="dish-img" style={{ backgroundImage: `url(${d.img})` }} />
                <div className="dish-body">
                  <div className="dish-head">
                    <h3>{d.name}</h3>
                    <span className="dish-price">{d.price}</span>
                  </div>
                  <p>{d.desc}</p>
                  {d.veg && <span className="dish-tag">Vegetarian</span>}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default Menu;
