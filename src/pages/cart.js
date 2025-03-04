import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";
import Header from "../components/header";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems) || [];

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

  return (
    <div className="min-h-screen p-4 sm:p-8 bg-gray-100">
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
                className="flex items-center justify-between bg-white p-4 rounded-[50px] shadow"
              >
                {/* Product Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-16 h-16 rounded-lg object-cover  "
                />

                {/* Product Details */}
                <div>
                  <h2 className="text-lg text-teal-600 font-bold ">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">Rs {item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center">
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

                {/* Remove Button */}
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="ml-4 text-red-500 hover:text-red-600"
                >
                  Remove
                </button>
              </div>
            ))}

            {/* Total Price */}
            <div className="text-right">
              <h3 className="text-xl font-bold text-gray-600">
                Total: Rs {totalPrice.toFixed(2)}
              </h3>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
