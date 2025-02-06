import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });
      console.log("Response Data:", response.data);

      if (response.data.accessToken) {
        alert("Login successful!");
        console.log("User Data:", response.data);

        localStorage.setItem("token", response.data.accessToken);

        router.push("/");
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid username or password. Try again."
      );
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:block w-1/2 bg-gradient-to-l from-teal-600 relative">
        <img
          src="/hero section imgs/left.png"
          alt="eKart"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="w-full lg:w-1/2 bg-teal-50 flex items-center justify-center p-8">
        <div className="p-8 bg-white shadow-lg rounded-lg w-96">
          <h1 className="text-3xl font-bold mb-6 text-center text-teal-600">
            Login
          </h1>
          <form onSubmit={handleLogin} className="flex flex-col gap-5">
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
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg font-semibold hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 focus:ring-offset-2"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-teal-800">
            Don't have an account?{" "}
            <a href="/signup" className="text-teal-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
