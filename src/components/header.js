import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { dispatch, useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/store/slices/productSlice";

export default function Header() {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = ["product", "city", "place"];

  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const categories = useSelector((state) => state.products.categories) || [];
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    dispatch(fetchCategories());

    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [dispatch]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-gray-200 shadow p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1
          className="text-xl sm:text-2xl font-bold text-teal-600 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          E-Kart
        </h1>

        {/* search input */}
        <div className="hidden sm:block mx-4 flex-grow text-right">
          <input
            type="text"
            placeholder={`Search by ${placeholders[placeholderIndex]}...`}
            className="w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
          />
        </div>

        {/* mobile menu icon */}
        <div className="sm:hidden">
          <AiOutlineMenu
            className="text-teal-600 text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <nav className="space-x-4 hidden sm:flex relative ">
          <div className="relative group">
            <a href="/products" className="text-black hover:text-teal-600 ">
              Products
            </a>

            <div
              className="absolute top-full left-0 invisible group-hover:visible bg-white shadow-lg rounded-lg w-48 z-10 
                         opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-gray-300 max-h-60 overflow-y-auto 
                         pointer-events-none group-hover:pointer-events-auto"
            >
              {categories.length > 0 ? (
                categories.map((category) => (
                  <a
                    key={category.id}
                    href={`/category/${category.slug}`}
                    className="block px-4 py-2 text-black hover:text-teal-600"
                  >
                    {category.name}
                  </a>
                ))
              ) : (
                <p className="px-4 py-2 text-gray-500">Loading...</p>
              )}
            </div>
          </div>

          <a
            href="/cart"
            className="text-black hover:text-teal-600 relative flex items-center"
          >
            Cart
            {totalItems > 0 && (
              <span className=" ml-[-5px] flex items-center justify-center text-gray-600 text-xs font-bold px-2">
                ({totalItems})
              </span>
            )}
          </a>
          <a href="/login" className="text-black hover:text-teal-600">
            Login
          </a>
        </nav>
      </div>

      {/* mobile navigation */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg mt-4 p-4 flex flex-col items-end pr-4">
          <a href="/products" className="text-black hover:text-teal-600">
            Products
          </a>
          <a href="/cart" className="block text-black hover:text-teal-600 ml-4">
            Cart
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3  text-white text-xs font-bold px-2 py-1 rounded-full">
                {cartItemCount}
              </span>
            )}
          </a>
          <a
            href="/login"
            className="block text-black hover:text-teal-600 ml-8"
          >
            Login
          </a>
        </div>
      )}
    </header>
  );
}
