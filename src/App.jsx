
import React,{useState} from "react";
import './App.css';
import Categories from './Categories';
import Items from "./data";
import Menu from './Menu';

const allCategories = ["all", ...new Set(Items.map((Item) => Item.category))]
console.log(allCategories)

function App() {
const [menuItems, setMenuItems] = useState(Items)
const [categories, setCategories] = useState(allCategories)

const filterItems = (category) => {
  if(category === "all") {
    setMenuItems(Items)
    return;
  }
  const newItems = Items.filter((Item) => Item.category === category)
  setMenuItems(newItems)
}

  return (
<main>
  <section className="menu section">
    <div className="title">
      <h2>our menu</h2>
      <div className="underline"></div>
    </div>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu Items={menuItems}/>
  </section>
</main>
  );
}

export default App;
