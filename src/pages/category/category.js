import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "@/store/slices/productSlice";
import { useRouter } from "next/router";

const Category = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.products);
  const router = useRouter();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    if (categories.length > 0) {
      console.log("Fetched Categories:", categories);
    }
  }, [categories]);

  const handleCategoryClick = (category) => {
    if (category.slug === "All") {
      router.push(`/products`);
    } else {
      router.push(`/category/${category.slug}`);
    }
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="text-center">
      <h3 className="text-4xl font-bold mb-12 text-teal-600">
        Browse by Category
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:mt-8 md:grid-cols-5 gap-4 justify-items-center mx-auto">
        {categories.map((category) => (
          <div
            key={category.slug}
            className="flex flex-col items-center cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-110"
            onClick={() => handleCategoryClick(category)}
          >
            <img
              src="/browse by cat imgs/all.avif"
              alt={category.name}
              className="w-32 h-32 object-cover rounded-lg mb-4 transition-transform duration-300 ease-in-out"
            />
            <button className="px-4 py-2 text-sm font-semibold rounded-md bg-transparent text-teal-600 border-2 border-teal-600 hover:scale-110 transition-all duration-300">
              {category.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
