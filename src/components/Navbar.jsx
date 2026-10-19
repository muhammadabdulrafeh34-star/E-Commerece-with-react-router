import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-gray-600 px-8 py-4 m-2 rounded-lg w-130 mx-auto">

      <nav className="flex items-center gap-10">

        <Link
          to="/"
          className="text-sm font-medium text-white px-4 py-2 hover:bg-orange-500"
        >
          Home
        </Link>

        <Link
          to="/ProductPage"
          className="text-sm font-medium text-white px-4 py-2 hover:bg-orange-500"
        >
          ProductPage
        </Link>

        {/* <Link
          to="/ProductDetailPage"
          className="text-sm font-medium text-white px-4 py-2 hover:bg-orange-500"
        >
          ProuctDtls
        </Link> */}

        <Link
          to="/Cart"
          className="text-sm font-medium text-white px-4 py-2 hover:bg-orange-500"
        >
          Cart
        </Link>
        <Link
          to="/WishList"
          className="text-sm font-medium text-white px-4 py-2 hover:bg-orange-500"
        >
          Wishlist
        </Link>

      </nav>

    </div>
  )
}

export default Navbar   