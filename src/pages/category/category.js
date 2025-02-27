import { useState } from "react";
import { useRouter } from "next/router";

export default function Category() {
  const categories = [
    { name: "All", image: "/browse by cat imgs/all.avif" },
    { name: "Beauty", image: "/browse by cat imgs/all.avif" },
    { name: "Fragrances", image: "/browse by cat imgs/all.avif" },
    { name: "Furniture", image: "/browse by cat imgs/all.avif" },
    { name: "Groceries", image: "/browse by cat imgs/all.avif" },
    {
      name: "Home Decoration",
      image: "/browse by cat imgs/all.avif",
    },
    {
      name: "Kitchen Accessories",
      image: "/browse by cat imgs/all.avif",
    },
    { name: "Laptops", image: "/browse by cat imgs/all.avif" },
    { name: "Mens Shirts", image: "/browse by cat imgs/all.avif" },
    { name: "Mens Shoes", image: "/browse by cat imgs/all.avif" },
    { name: "Mens Watches", image: "/browse by cat imgs/all.avif" },
    {
      name: "Mobile Accessories",
      image: "/browse by cat imgs/all.avif",
    },
    { name: "Motorcycle", image: "/browse by cat imgs/all.avif" },
    { name: "Skin Care", image: "/browse by cat imgs/all.avif" },
    { name: "Smartphones", image: "/browse by cat imgs/all.avif" },
    {
      name: "Sports Accessories",
      image: "/browse by cat imgs/all.avif",
    },
    { name: "Sunglasses", image: "/browse by cat imgs/all.avif" },
    { name: "Tablets", image: "browse by cat imgs/all.avif" },
    { name: "Tops", image: "browse by cat imgs/all.avif" },
    { name: "Vehicle", image: "/browse by cat imgs/all.avif" },
    { name: "Womens Bags", image: "/browse by cat imgs/all.avif" },
    { name: "Womens Dresses", image: "/browse by cat imgs/all.avif" },
    {
      name: "Womens Jewellery",
      image: "/browse by cat imgs/all.avif",
    },
    { name: "Womens Shoes", image: "/browse by cat imgs/all.avif" },
    { name: "Womens Watches", image: "/browse by cat imgs/all.avif" },
    { name: "Laptop", image: "/browse by cat imgs/all.avif" },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const router = useRouter();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.name);
    router.push(
      `/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`
    );
  };

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold mb-12 text-teal-600">
        Browse by Category
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:mt-8 md:grid-cols-5 gap-4 justify-items-center mx-auto">
        {categories.map((category) => (
          <div
            key={category.name}
            className="flex flex-col items-center cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110"
            onClick={() => handleCategoryClick(category)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-32 h-32 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out"
            />
            <button
              className={`px-4 py-2 text-sm font-semibold rounded-md transition-all duration-300 ease-in-out transform ${
                selectedCategory === category.name
                  ? "bg-teal-600 text-white"
                  : "bg-transparent text-teal-600 border-2 border-teal-600"
              } hover:scale-110`}
            >
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
