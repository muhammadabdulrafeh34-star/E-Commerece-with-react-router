import React from 'react'
import { CartContext } from '../context/CartContext'


function Cart() {
  const {cartItems, IncreaseQty, DecreaseQty, removeCartItem, cartTotal, clearCart, toogleWishList } = React.useContext(CartContext)
  
  return (
    <div>
      {cartItems.map((product) => (
        <div key={product.id} className="w-85 h-auto mx-auto items-center rounded-lg shadow-md border bg-transparent">
          <img src={product.image} alt={product.title}  />
          <p className='text-center'>{product.title}</p>
          <p className='text-center'>PKR {product.price}</p>
          
          <div className="flex justify-center items-center">
            <button onClick={() => IncreaseQty(product.id)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"  
            >+</button>
            <span
            className="mx-2 text-black font-semibold w-auto text-center"
            >{product.quantity}</span>
            <button onClick={() => DecreaseQty(product.id)}
            className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 mt-4"
            >-</button>
            <button onClick={() => removeCartItem(product.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4"
            >Remove</button>
             <button onClick={() => toogleWishList(product)}
       className="bg-white text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 mx-auto block"
       >❤️</button>
          </div>
        </div>
      ))}
       <p className="text-lg font-bold mt-4 text-black text-center">Total: PKR {cartTotal}</p>
       <button onClick={clearCart}
       className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-4 mx-auto block"
       >Clear Cart</button>
    </div>
  )
}

export default Cart

