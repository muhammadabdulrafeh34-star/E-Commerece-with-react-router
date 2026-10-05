import React from 'react'
import Products from "../data/Products"
import {Link} from 'react-router-dom'

function ProductPage() {
  // console.log(Products)
  return (
    <div className="p-8">
      {/* <h1 className="text-2xl font-bold mb-6">All Products</h1> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Products.map((item) => (
          <div key={item.id} className="bg-transparent p-4 rounded-lg shadow-md border">
          <Link to={`/ProductDetailPage/${item.id}`} className="text-blue-500 underline">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-100 object-cover mb-4" 
            />
            
            <h2 className="text-sm font-semibold text-black">{item.title}</h2>
            <p className="text-black">PKR {item.price}</p>
            {/* <p className="text-black underline">View Details</p> */}
            </Link> 
            </div>  
        ))}
      </div>
     </div> 
  )
}

export default ProductPage