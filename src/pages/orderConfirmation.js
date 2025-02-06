import { useRouter } from "next/router";

export default function orderConfirmation() {
  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-green-600">
        Order Confirmed!
      </h2>
      <p className="text-lg text-black">
        Your order has been successfully placed. Thank you for shopping with us!
      </p>

      <button
        onClick={() => router.push("/")}
        className="mt-6 w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
      >
        Return to Home
      </button>
    </div>
  );
}
