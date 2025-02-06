// import { createContext, useContext, useState } from "react";

// const CartContext = createContext();

// export const useCart = () => {
//   return useContext(CartContext);
// };

// export function CartProvider({ children }) {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const existingItem = prev.find((item) => item.id === product.id);
//       if (existingItem) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }
//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const updateQuantity = (id, quantity) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
//       )
//     );
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }
