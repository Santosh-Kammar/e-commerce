import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addToCart } from "@/store/slices/cartSlice";
import { toast } from "react-toastify";

export default function Products({ product }) {
  const [showModal, setShowModal] = useState(false);
  const [showReviewsModal, setShowReviewsModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(product.price);
  const [cart, setCart] = useState([]);
  const Router = useRouter();
  const dispatch = useDispatch();

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const openReviewsModal = () => setShowReviewsModal(true);
  const closeReviewsModal = () => setShowReviewsModal(false);

  const handleBuyClick = () => {
    Router.push({
      pathname: "/address",
      query: {
        title: product.title,
        brand: product.brand,
        price: product.price,
        thumbnail: product.thumbnail,
        sku: product.sku,
        description: product.description,
      },
    });
  };

  const increaseQuantity = () => {
    setQuantity((prev) => {
      if (prev < 20) {
        const newQuantity = prev + 1;
        setTotalPrice(newQuantity * product.price);
        return newQuantity;
      }
      return prev;
    });
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => {
      if (prev > 1) {
        const newQuantity = prev - 1;
        setTotalPrice(newQuantity * product.price);
        return newQuantity;
      }
      return prev;
    });
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();

    const isItemInCart = cart.some((item) => item.id === product.sku);
    if (isItemInCart) {
      toast.info(`${product.title} is already in the cart!`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: { backgroundColor: "#D1D5DB", color: "#374151" },
      });
      return;
    }

    const cartItem = {
      id: product.sku,
      title: product.title,
      price: product.price,
      quantity: quantity,
      thumbnail: product.thumbnail,
    };

    dispatch(addToCart(cartItem));

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.sku
      );
      let updatedCart;

      if (existingItemIndex !== -1) {
        updatedCart = prevCart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [...prevCart, cartItem];
      }

      return updatedCart;
    });

    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      style: { backgroundColor: "#D1D5DB", color: "#374151" },
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div onClick={openModal}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-48 rounded-lg"
          loading="lazy"
        />
        <h2 className="mt-4 text-xl text-black">{product.title}</h2>
        <p className="text-lg text-teal-600 mt-2">Rs {product.price}</p>

        <button
          className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors duration-300"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      {showModal && (
        <div className="fixed text-black top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative bg-white text-green-600 p-6 rounded-lg shadow-lg w-[500px] h-[700px]">
            <button
              className="absolute top-2 right-2 bg-teal-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors"
              onClick={closeModal}
            >
              Cancel
            </button>

            <h2 className="text-xl text-teal-600 font-bold mt-5">
              {product.title}
            </h2>

            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 rounded-lg border border-gray-100 shadow-xl"
            />

            <div className="flex items-center justify-end mt-4">
              <span className="mr-2 text-black">Quantity:</span>
              <button
                className="bg-gray-300 px-3 py-1 rounded text-black hover:bg-gray-400"
                onClick={decreaseQuantity}
              >
                -
              </button>
              <span className="px-3 text-xl font-semibold">{quantity}</span>
              <button
                className="bg-gray-300 px-3 py-1 rounded text-black hover:bg-gray-400"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <div className="text-black">
              <div className="mt-1 text-green-600 font-semibold text-[16px]">
                Description:
              </div>
              {product.description}
            </div>

            <div className="mt-1 text-[14px]">
              <strong>Details:</strong>
              <div className="text-black text-xs">SKU: {product.sku}</div>
              <div className="text-black text-xs">
                Brand: {product.brand ? product.brand : "N/A"}
              </div>
              <div className="text-black text-xs">
                Depth: {product.dimensions.depth}
              </div>
              <div className="text-black text-xs">
                Height: {product.dimensions.height}
              </div>
              <div className="text-black text-xs">
                Width: {product.dimensions.width}
              </div>

              <div className="text-green-600 font-bold mt-2">
                Price Per Unit: Rs {product.price}
              </div>
              <div className="text-red-600 font-bold text-lg mt-2">
                Total Price: Rs {totalPrice.toFixed(2)}
              </div>

              <button
                className="mt-2 w-full bg-gray-300 text-black px-1 py-1 rounded hover:bg-gray-400"
                onClick={openReviewsModal}
              >
                Go to Reviews
              </button>
            </div>

            <button
              className="mt-2 w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
              onClick={handleBuyClick}
            >
              Buy
            </button>
          </div>
        </div>
      )}

      {showReviewsModal && (
        <div className="fixed text-black top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="relative bg-white text-green-600 p-6 rounded-lg shadow-lg w-96">
            <button
              className="absolute top-2 right-2 bg-teal-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors"
              onClick={closeReviewsModal}
            >
              Close
            </button>

            <h2 className="text-xl text-green-600 font-bold mb-4">
              Product Reviews
            </h2>

            {product.reviews && product.reviews.length > 0 ? (
              <div className="max-h-60 overflow-y-auto">
                {product.reviews.map((review, index) => (
                  <div
                    key={index}
                    className="border-b pb-2 mb-2 last:border-none"
                  >
                    <p className="text-black font-bold">
                      {review.reviewerName}
                    </p>
                    <p className="text-yellow-500">
                      Rating: {review.rating} ⭐
                    </p>
                    <p className="text-gray-600 ">{review.comment}</p>

                    <p className=" text-gray-600 mt-1 text-xs">
                      {review.reviewerEmail}
                    </p>
                    <p className=" text-gray-600 mt-1 text-xs">
                      {new Date(review.date).toLocaleDateString("en-GB")}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No reviews available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
