import { useRouter } from "next/router";
import { FaHome } from "react-icons/fa";

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200 flex items-center justify-center text-white text-center p-8">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-10 text-teal-600">
        <h1 className="text-6xl font-extrabold mb-6 animate__animated animate__fadeIn">
          404
        </h1>
        <p className="text-2xl mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Oops! The page you are looking for doesn't exist.
        </p>
        <p className="text-lg mb-8 animate__animated animate__fadeIn animate__delay-2s">
          It seems that the page you're looking for is unavailable.
          <br />
          go back to the homepage.
        </p>
        <button
          onClick={handleGoHome}
          className="bg-teal-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-teal-700 focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
        >
          <FaHome className="inline-block mr-2" />
          Go to Homepage
        </button>
      </div>
    </div>
  );
}
