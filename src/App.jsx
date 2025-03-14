import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./screens/Home";
import Items from "./screens/Items";
import Checkout from "./screens/Checkout";
import AddItem from "./screens/AddItem";
import Navbar from "./components/Navbar"; // Import Navbar

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  return (
    <div className="p-4">
      <Navbar cartCount={cartCount} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Items setCartCount={setCartCount} />} />
        <Route
          path="/checkout"
          element={<Checkout setCartCount={setCartCount} />}
        />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </div>
  );
};

export default App;
