import { useEffect, useState } from "react";
import { fetchCategories, fetchProducts } from "../store/slices/productSlice";
import Header from "@/components/header";
import ProductCard from "@/components/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import Footer from "@/components/footer";

export default function Products() {
  const dispatch = useDispatch();

  // Get data from Redux store
  const { categories, products, totalProducts, loading } = useSelector(
    (state) => state.products
  );
  console.log("@@@@", products);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");
  const itemsPerPage = 30;

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      fetchProducts({
        selectedCategory,
        currentPage,
        itemsPerPage,
      })
    );
  }, [dispatch, selectedCategory, currentPage]);

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "lowToHigh") {
      return a.price - b.price;
    } else if (sortOrder === "highToLow") {
      return b.price - a.price;
    }
    return 0;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.slug);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4 sm:p-8">
        <h1 className="text-2xl font-bold text-teal-600 mt-6">Products</h1>

        {/* Category Filter */}
        <div className="mt-4">
          <div className="flex gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-md text-sm font-semibold ${
                  selectedCategory === category.slug
                    ? "bg-teal-600 text-white"
                    : "bg-gray-200 text-teal-600"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          <select
            onChange={handleSortChange}
            value={sortOrder}
            className="px-4 py-2 border rounded-md text-teal-600 bg-white"
          >
            <option value="default">Sort by</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center mt-10">Loading products...</div>
        ) : (
          <>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-8 gap-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded-md text-teal-600 disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-teal-600 font-medium">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px-4 py-2 bg-gray-300 rounded-md text-teal-600 disabled:opacity-50"
                onClick={() => setCurrentPage((prev) => prev + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
