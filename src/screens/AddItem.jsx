import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../config";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [img, setImg] = useState("");

  const validateInputs = () => {
    if (!name.trim()) {
      toast.error("Item name is required!");
      return false;
    }
    if (!price || isNaN(price) || Number(price) <= 0) {
      toast.error("Please enter a valid price!");
      return false;
    }
    if (!img.trim()) {
      toast.error("Image URL is required!");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) return;

    const newItem = { name, price, img };

    try {
      const response = await fetch(`${config.baseUrl}/items`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Failed to add item");
      }

      toast.success("Item added successfully!");
      setName("");
      setPrice("");
      setImg("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong, please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Toast Notification Container (Required for toast messages) */}
      <ToastContainer position="top-right" autoClose={3000} />

      <h1 className="text-2xl font-bold mb-4 text-center">
        Put Items up for Sale
      </h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center"
      >
        <input
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[50%] px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-[50%] px-4 py-2 border rounded"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="w-[50%] px-4 py-2 border rounded"
        />
        <button
          type="submit"
          className="w-[50%] bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
