import React from 'react'   
import {CartContext} from '../context/CartContext'

function WishList() {
    const {wishListItems} = React.useContext(CartContext)
    // console.log(pro)
    return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            wishListItems.map((product) => (
                // console.log(product),
                <div key={product.id} className="bg-transparent p-4 rounded-lg shadow-md border">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-100 object-cover mb-4" 
                    />
                    <p>{product.title}</p>
                    <p>{product.price}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default WishList
