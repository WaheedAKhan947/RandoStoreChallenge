import { useState, useEffect } from "react";
import config from "../../config";

const Items = ({ setCartCount }) => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    fetch(`${config.baseUrl}/items`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length);
  };

  useEffect(() => {
    const syncCart = (event) => {
      if (event.key === "cart") {
        setCart(JSON.parse(event.newValue) || []);
        setCartCount(JSON.parse(event.newValue)?.length || 0);
      }
    };
    window.addEventListener("storage", syncCart);

    return () => {
      window.removeEventListener("storage", syncCart);
    };
  }, [setCartCount]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Available Items</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white p-4 rounded-lg shadow-lg border-2 border-black-100"
          >
            <img
              src={
                item.img
                  ? `${config.baseUrl.replace(/\/$/, "")}/${item.img.replace(
                      /^\//,
                      ""
                    )}`
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      item.name
                    )}&size=200`
              }
              alt={item.name}
              className="w-full h-40 object-contain rounded-md"
            />
            <h2 className="text-lg font-semibold mt-2 text-center">
              {item.name}
            </h2>
            <p className="text-gray-600 text-center">${item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full hover:cursor-pointer"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Items;
