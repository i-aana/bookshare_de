import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { name: "Data Structures Book", quantity: 1, price: 499 },
    { name: "Engineering Maths", quantity: 2, price: 299 }
  ]);

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, i) => i !== indexToRemove));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-[#004aad]">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-4 p-4 border rounded-lg">
              <div>
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-gray-600">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p>₹{item.quantity * item.price}</p>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right mt-6 font-semibold text-xl">
            Total: ₹{total}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
