import { useRouter } from "next/router";

export default function Payment() {
  const router = useRouter();
  const { query } = router;

  const handlePayment = () => {
    alert(
      `Payment of Rs ${query.price} via ${query.paymentMethod} successful!`
    );

    router.push("/orderConfirmation");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4 text-green-600">Payment Page</h2>

      <p className="text-lg text-black">
        Paying Rs {query.price} using {query.paymentMethod}
      </p>

      <button
        onClick={handlePayment}
        className="mt-6 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Complete Payment
      </button>
    </div>
  );
}
