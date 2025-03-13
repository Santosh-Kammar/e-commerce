import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";
import Header from "../components/header";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  const router = useRouter();

  const handleQuantityChange = (productId, newQuantity) => {
    console.log(
      "Function called! Product ID:",
      productId,
      "New Quantity:",
      newQuantity
    );

    if (!productId) {
      console.error("Product ID is undefined! Check the cart item structure.");
    }

    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price ?? 0) * (item.quantity ?? 1),
    0
  );

  const handleBuyNow = () => {
    if (cartItems.length === 0) {
      toast("Your cart is empty!", {
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
    router.push("/address");
  };

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-100 cart-container">
      <Header />
      <h1 className="text-2xl font-bold text-left text-teal-600 mt-6">Cart</h1>

      <section className="mt-10">
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty!</p>
        ) : (
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.productId}
                className="flex items-center bg-white p-4 rounded-[50px] shadow w-full cart-item"
              >
                {/*product image*/}
                <div className="w-20 h-20">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>

                {/*product details */}
                <div className="relative w-1/3 px-4 cart-item-details">
                  <h2 className="text-lg text-teal-600 font-bold truncate cart-item-title">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 cart-item-price">
                    Rs {item.price}
                  </p>
                </div>

                {/* quantity controls */}
                <div className="flex items-center w-1/4 justify-center cart-item-quantity">
                  <button
                    className="bg-gray-300 px-3 py-1 rounded text-black hover:bg-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>

                  <span className="px-3 text-lg text-gray-600 font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    className="bg-gray-300 px-3 py-1 rounded text-black hover:bg-gray-400"
                    onClick={() =>
                      handleQuantityChange(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                {/* remove button */}
                <div className="w-1/6 text-right cart-item-remove ml-25px">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* total Price */}
            <div className="text-right cart-total">
              <h3 className="text-xl font-bold text-gray-600">
                Total: Rs {totalPrice.toFixed(2)}
              </h3>
              <div className="flex justify-center mt-6">
                <button
                  className="bg-teal-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-teal-700 transition buy-now-btn"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
