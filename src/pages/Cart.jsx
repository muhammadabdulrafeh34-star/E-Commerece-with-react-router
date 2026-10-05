import React from 'react'
import { CartContext } from '../context/CartContext'


function Cart() {
  const {cartItems, IncreaseQty, DecreaseQty, removeCartItem} = React.useContext(CartContext)
  return (
    <div>
      {cartItems.map((product) => (
        <div key={product.id} className="w-50 h-30 mx-auto items-center rounded-lg shadow-md border bg-transparent">
          <p>{product.title}</p>
          <p>PKR {product.price}</p>

          <div>
            <button onClick={() => IncreaseQty(product.id)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"  
            >+</button>
            <span
            className="mx-2 text-black font-semibold"
            >{product.quantity}</span>
            <button onClick={() => DecreaseQty(product.id)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"
            >-</button>
            <button onClick={() => removeCartItem(product.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
            >Remove</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart

