import { NavLink } from "react-router-dom";

const Navbar =({ cartCount }) => { 
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg sticky top-0">
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-1 py-2 rounded ${isActive ? "bg-blue-500" : "hover:cursor-pointer"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/items"
          className={({ isActive }) =>
            `px-1 py-2 rounded ${isActive ? "bg-blue-500" : "hover:cursor-pointer"}`
          }
        >
          Items
        </NavLink>
        <NavLink
          to="/add-item"
          className={({ isActive }) =>
            `px-1 py-2 rounded ${isActive ? "bg-blue-500" : "hover:cursor-pointer"}`
          }
        >
          Add Item
        </NavLink>
      </div>
      <NavLink
        to="/checkout"
        className={({ isActive }) =>
          `px-1 py-2 rounded ${isActive ? "bg-blue-500" : "hover:cursor-pointer"}`
        }
      >
        🛒 Cart ({cartCount})
      </NavLink>
    </nav>
  );
}

export default Navbar;
