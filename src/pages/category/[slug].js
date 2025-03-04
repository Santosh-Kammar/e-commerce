import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slices/productSlice";
import ProductCard from "@/components/ProductCart";
import Header from "@/components/header";

const CategoryPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (slug) {
      dispatch(
        fetchProducts({
          selectedCategory: slug,
          currentPage: 1,
          itemsPerPage: 30,
        })
      );
    }
  }, [dispatch, slug]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">
      <Header></Header>
      <h1 className="text-2xl font-bold text-teal-600 mt-6">
        {slug === "all" ? "All Products" : `Category: ${slug}`}
      </h1>

      {loading ? (
        <p className="text-center mt-10">Loading products...</p>
      ) : (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
