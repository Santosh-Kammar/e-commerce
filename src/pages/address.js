import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Address({ product }) {
  const router = useRouter();
  const { query } = router;
  const [showModal, setShowModal] = useState(true);
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [emailError, setEmailError] = useState();

  useEffect(() => {
    console.log(query);
  }, [query]);

  const closeModal = () => {
    setShowModal(false);
    router.push("/products");
  };

  const validateEmail = (email) => {
    const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegx.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    if (product) {
      alert("Product is not available");
      return;
    }

    router.push({
      pathname: "/checkout",
      query: {
        fullname,
        email,
        address,
        city,
        postalcode,
        country,
        title: query.title,
        brand: query.brand,
        price: query.price,
        thumbnail: query.thumbnail,
      },
    });
  };

  if (!showModal) return null;

  return (
    <div className="bg-opacity-50">
      <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 w-[500px] h-[600px] relative">
        <h2 className="text-2xl font-bold text-teal-500 mb-4">
          Shipping address
        </h2>

        <button
          className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-1 rounded hover:bg-red-600 transition-colors "
          onClick={closeModal}
        >
          Cancel
        </button>

        <form onSubmit={handleSubmit}>
          <label className="block font-semibold text-gray-700">
            Full Name :
          </label>

          <input
            type="text"
            name="fullname"
            required
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-[16px] text-black"
          />

          <label className="block font-semibold text-gray-700 mt-3">
            E-mail :
          </label>
          <input
            type="text"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-[16px] text-black"
          />
          {emailError && (
            <p className="text-red-500 text-sm mt-1">{emailError}</p>
          )}

          <label className="block font-semibold text-gray-700">Address :</label>
          <input
            type="text"
            name="address"
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-[16px] text-black"
          />

          <label className="block font-semibold text-gray-700 mt-3">
            City :
          </label>
          <input
            type="text"
            name="city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-[16px] text-black"
          />

          <label className="block font-semibold text-gray-700">
            Postal Code:
          </label>
          <input
            type="text"
            name="postalcode"
            required
            value={postalcode}
            onChange={(e) => setPostalCode(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-[16px] text-black"
          />

          <label className="block font-semibold text-gray-700">Country</label>
          <input
            type="text"
            name="country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
            className="w-full p-2 border rounded mt-1 text-[16px] text-black"
          />

          <button
            type="submit"
            className="mt-6 w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
          >
            Proceed to checkout
          </button>
        </form>
      </div>
    </div>
  );
}
