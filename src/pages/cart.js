// import { useCart } from "../context/cartContext";
// import Header from "../components/header";

// export default function Cart() {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <div className="min-h-screen p-4 sm:p-8 bg-gray-100">
//       <div>
//         <Header />
//       </div>
//       {/* <header className="bg-gray-200 shadow p-4">
//         <h1 className="text-xl sm:text-2xl font-bold text-teal-600">
//           Your Cart
//         </h1>
//       </header> */}

//       <h1 className="text-2xl font-bold text-left text-teal-600 mt-6">Cart</h1>

//       <section className="mt-10">
//         {cartItems.length === 0 ? (
//           <p className="text-gray-600 text-center">Your cart is empty!</p>
//         ) : (
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
//               >
//                 <div>
//                   <h2 className="text-lg font-bold">{item.title}</h2>
//                   <p className="text-gray-600">Rs {item.price}</p>
//                 </div>
//                 <div className="flex items-center">
//                   <input
//                     type="number"
//                     value={item.quantity}
//                     min="1"
//                     onChange={(e) => updateQuantity(item.id, +e.target.value)}
//                     className="w-16 border rounded text-center"
//                   />
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="ml-4 text-red-500 hover:text-red-600"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//             <div className="text-right">
//               <h3 className="text-xl font-bold">
//                 Total: Rs {totalPrice.toFixed(2)}
//               </h3>
//             </div>
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }
