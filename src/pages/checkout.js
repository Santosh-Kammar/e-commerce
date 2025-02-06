import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  const { query } = router;

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Credit Card");
  const [price, setPrice] = useState("");
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  useEffect(() => {
    if (query.fullname) setCustomerName(query.fullname);
    if (query.email) setEmail(query.email);
    if (query.address) setAddress(query.address);
    if (query.price) setPrice(query.price);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPaymentDetails(true);

    router.push({
      pathname: "/payment",
      query: {
        fullname: customerName,
        email: email,
        address: address,
        price: price,
        paymentMethod: paymentMethod,
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Checkout</h2>

      <div className="flex items-center gap-4">
        <img
          src={query.thumbnail}
          alt={query.title}
          className="w-24 h-24 rounded-lg"
        />
        <div>
          <h3 className="text-xl font-semibold text-black">{query.title}</h3>
          <p className="text-gray-700">Brand: {query.brand}</p>
          <p className="text-green-600 font-bold">Price: Rs {query.price}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label className="block font-semibold text-black mt-3">
          Full Name :
        </label>
        <input
          type="text"
          required
          name="fullname"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-black"
        />

        <label className="block font-semibold text-gray-700 mt-3 text-black">
          E-mail :
        </label>
        <input
          type="text"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-black"
        />

        <label className="block font-semibold text-black mt-3">Address :</label>
        <input
          type="text"
          name="address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-black"
        />

        <label className="block font-semibold text-black mt-3">
          Payment Method
        </label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-black"
        >
          <option>Credit Card</option>
          <option>PayPal</option>
          <option>Cash on Delivery</option>
        </select>

        <button
          type="submit"
          className="mt-6 w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
        >
          Place Order
        </button>
      </form>

      {showPaymentDetails && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h3 className="text-xl font-bold text-black">Payment Details</h3>
          {paymentMethod === "Credit Card" && (
            <p className="text-gray-700">
              Please enter your credit card details on the next page.
            </p>
          )}
          {paymentMethod === "PayPal" && (
            <p className="text-gray-700">
              You will be redirected to PayPal to complete your payment.
            </p>
          )}
          {paymentMethod === "Cash on Delivery" && (
            <p className="text-gray-700">
              You can pay in cash when your order is delivered.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
