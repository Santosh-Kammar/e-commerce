import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Address({ product }) {
  const router = useRouter();
  const { query } = router;

  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  useEffect(() => {
    console.log(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (product) {
      alert("product is not available");
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

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 w-[500px] h-[600px]">
      <h2 className="text-2xl font-bold text-green-600 mb-4">
        Shipping address
      </h2>

      <form onSubmit={handleSubmit}>
        <label className="block font-semibold text-gray-700">Full Name :</label>
        <input
          type="text"
          name="fullname"
          required
          value={fullname}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-[16px] text-black "
        ></input>

        <label className="block font-semibold text-gray-700 mt-3">
          E-mail :
        </label>
        <input
          type="text"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-[16px] text-black "
        ></input>

        <label className="block font-semibold text-gray-700">Address :</label>
        <input
          type="text"
          name="address"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-[16px] text-black required"
        ></input>

        <label className="block font-semibold text-gray-700 mt-3">City :</label>
        <input
          type="text"
          name="city"
          value={city}
          required
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-[16px] text-black "
        ></input>

        <label className="block font-semibold text-gray-700">
          Postal Code:
        </label>
        <input
          type="text"
          name="postalcode"
          required
          value={postalcode}
          onChange={(e) => setPostalCode(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-[16px] text-black "
        ></input>

        <label className="block font-semibold text-gray-700">Country</label>
        <input
          type="text"
          name="country"
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-2 border rounded mt-1 text-[16px] text-black "
        ></input>

        <button
          type="submit"
          className="mt-6 w-full bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors"
        >
          Proceed to checkout
        </button>
      </form>
    </div>
  );
}
