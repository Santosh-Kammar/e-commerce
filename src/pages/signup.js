import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      if (response.data.accessToken) {
        alert("Sign Up successful!");

        const { firstName, email, username, accessToken, refreshToken } =
          response.data;

        console.log("User Data:", response.data);

        localStorage.setItem("token", accessToken);
        localStorage.setItem(
          "user",
          JSON.stringify({ firstName, email, username })
        );

        router.push("/login");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Error during signup. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden lg:block w-1/2 bg-gradient-to-l from-teal-600 relative">
        <img
          src="/hero section imgs/left.png"
          alt="eKart"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section  */}
      <div className="w-full lg:w-1/2 bg-teal-50 flex items-center justify-center p-8">
        <div className="p-8 bg-white shadow-lg rounded-lg w-96">
          <h1 className="text-3xl font-bold mb-6 text-center text-teal-600">
            Sign Up
          </h1>
          <form onSubmit={handleSignUp} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-teal-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                className="w-full mt-2 px-4 py-2 border border-teal-300 rounded-lg text-black focus:ring-2 focus:ring-teal-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-teal-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-2 px-4 py-2 border border-teal-300 rounded-lg text-black focus:ring-2 focus:ring-teal-400 focus:outline-none"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-teal-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                placeholder="Re-enter your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full mt-2 px-4 py-2 border border-teal-300 rounded-lg text-black focus:ring-2 focus:ring-teal-400 focus:outline-none"
                required
              />
            </div>
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-teal-800">
            Already have an account?
            <a href="/login" className="text-teal-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
