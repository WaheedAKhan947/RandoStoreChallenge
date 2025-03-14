import { useState } from "react";
import config from "../../config";

const Checkout =({setCartCount}) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartCount(updatedCart.length); 
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow"
            >
              <img
                src={
                  item.img
                    ? `${config.baseUrl.replace(/\/$/, "")}/${item.img.replace(
                        /^\//,
                        ""
                      )}`
                    : "https://picsum.photos/200"
                }
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 hover:cursor-pointer"
              >
                checkout
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
