// import { useRouter } from "next/router";
// import { useCart } from "@/context/cartContext";

// const products = [
//   {
//     id: 1,
//     title: "Product 1",
//     price: 29.99,
//     description: "This is a great product.",
//     thumbnail: "/products-images/p1.webp",
//   },
//   {
//     id: 2,
//     title: "Product 2",
//     price: 49.99,
//     description: "This is another great product.",
//     thumbnail: "/products-images/p2.webp",
//   },
//   {
//     id: 3,
//     title: "Product 3",
//     price: 19.99,
//     description: "This is an affordable product.",
//     thumbnail: "/products-images/p3.webp",
//   },
// ];

// export default function ProductDetail() {
//   const { addToCart } = useCart();
//   const router = useRouter();
//   const { id } = router.query;

//   const product = products.find((prod) => prod.id == id);

//   if (!product) return <div>Product not found!</div>;

//   return (
//     <div className="min-h-screen p-4 sm:p-8 bg-gray-100">
//       <header className="bg-gray-200 shadow p-4">
//         <h1 className="text-xl sm:text-2xl font-bold text-teal-600">
//           {product.title}
//         </h1>
//       </header>

//       <section className="mt-10 flex">
//         <img
//           src={product.thumbnail}
//           alt={product.title}
//           className="w-1/2 h-96 object-cover rounded-lg"
//         />
//         <div className="ml-10">
//           <h2 className="text-2xl font-semibold">{product.title}</h2>
//           <p className="text-lg text-teal-600 mt-2">Rs {product.price}</p>
//           <p className="mt-4">{product.description}</p>
//           <button
//             onClick={() => addToCart(product)}
//             className="mt-4 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
//           >
//             Add to Cart
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }
