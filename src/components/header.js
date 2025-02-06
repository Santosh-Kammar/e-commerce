import { AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const placeholders = ["product", "city", "place"];

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Sports",
    "Home Appliances",
  ];

  return (
    <header className="bg-gray-200 shadow p-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1
          className="text-xl sm:text-2xl font-bold text-teal-600 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          E-Kart
        </h1>

        {/* Search Input */}
        <div className="hidden sm:block mx-4 flex-grow text-right">
          <input
            type="text"
            placeholder={`Search by ${placeholders[placeholderIndex]}...`}
            className="w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-black"
          />
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <AiOutlineMenu
            className="text-teal-600 text-3xl cursor-pointer"
            onClick={toggleMenu}
          />
        </div>

        <nav className="space-x-4 hidden sm:flex relative">
          {/* Products Dropdown */}
          <div className="relative group">
            <a href="/products" className="text-black hover:text-teal-600">
              Products
            </a>
            {/* Dropdown Menu */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 w-48 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 group-hover:visible visible">
              {categories.map((category) => (
                <a
                  key={category}
                  href={`/category/${category.toLowerCase()}`}
                  className="block px-4 py-2 text-black hover:text-teal-600"
                >
                  {category}
                </a>
              ))}
            </div>
          </div>

          <a href="/cart" className="text-black hover:text-teal-600">
            Cart
          </a>
          <a href="/login" className="text-black hover:text-teal-600">
            Login
          </a>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg mt-4 p-4 flex flex-col items-end pr-4">
          <a href="/products" className="text-black hover:text-teal-600">
            Products
          </a>
          <a href="/cart" className="block text-black hover:text-teal-600 ml-4">
            Cart
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
