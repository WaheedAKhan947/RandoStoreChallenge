import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">
        Welcome to RandoStore
      </h1>
      <p className="text-lg font-bold text-center">
        Buy and sell random items online!
      </p>
      <nav className="text-center mt-4 flex justify-center items-center gap-3">
        <Link to="/items">
          <div className="border p-2 rounded-2xl bg-amber-600 hover:bg-amber-700">
            View Items
          </div>
        </Link>{" "}
        <Link to="/checkout">
          {" "}
          <div className="border p-2 rounded-2xl bg-blue-600 hover:bg-blue-700">
            Checkout
          </div>
        </Link>{" "}
        <Link to="/add-item">
          {" "}
          <div className="border p-2 rounded-2xl bg-green-500 hover:bg-green-600">
            Add an Item
          </div>
        </Link>
      </nav>
    </div>
  );
};

export default Home;
