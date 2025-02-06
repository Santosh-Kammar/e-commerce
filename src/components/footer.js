import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-gray-200 shadow mt-10 p-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        {/* About Section */}
        <div className="text-center sm:text-left">
          <h2 className="text-teal-600 text-lg font-bold">About E-Kart</h2>
          <p className="mt-2 text-gray-700">
            E-Kart is your one-stop shop for all your shopping needs. Explore a
            wide range of products from electronics to fashion, and enjoy
            seamless online shopping.
          </p>
        </div>

        {/* Links Section */}
        <div className="text-center">
          <h2 className="text-teal-600 text-lg font-bold">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="/" className="text-black hover:text-teal-600">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="text-black hover:text-teal-600">
                Products
              </a>
            </li>
            <li>
              <a href="/cart" className="text-black hover:text-teal-600">
                Cart
              </a>
            </li>
            <li>
              <a href="/login" className="text-black hover:text-teal-600">
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center sm:text-right">
          <h2 className="text-teal-600 text-lg font-bold">Contact Us</h2>
          <p className="mt-2 text-gray-700">Email: support@ekart.com</p>
          <p className="text-gray-700">Phone: +91-9876543210</p>
          <div className="flex justify-center sm:justify-end mt-4 space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 text-2xl hover:text-teal-700"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 text-2xl hover:text-teal-700"
            >
              <AiFillTwitterCircle />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-600 text-2xl hover:text-teal-700"
            >
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t-2 border-gray-300 pt-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} E-Kart. All rights reserved.
      </div>
    </footer>
  );
}
