import React from 'react'
import { useParams } from 'react-router-dom'
import Products from "../data/Products"

function ProductDetailPage(){
  const { id } = useParams()
  //yahan hum .find method use kren k kyon k kisi akeli cheez ko id k throw find krna hoga.
  // When you have a list of data (e.g., products or articles) and want to 
  // display a detailed view of a specific item based on an ID (often passed via URL parameters)

  // parseInt use karke string id ko number mein convert kiya aur find kiya
  const product = Products.find((product) => product.id === parseInt(id))
  return (
    <div className="p-8 m-10 w-130 h-150 items-center rounded-lg shadow-md border bg-transparent">
      {/* <h2 className="text-2xl font-bold">Product Detail Page</h2> */}
      <img 
        src={product.image}
        alt="title"
        className="w-100 h-100 object-cover mb-4 rounded-lg shadow-md border"
      />
      <p className="text-black mt-2">{product.title}</p>
      <p className="text-black mt-2">PKR {product.price}</p>
     {/* <p className="text-gray-600 mt-2">{product.description}</p> */}
    </div>
  )
}

export default ProductDetailPage