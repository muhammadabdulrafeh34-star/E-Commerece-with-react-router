import React, {useState} from 'react'

const CartContext = React.createContext()


const CartContextProvider = ({children}) => {
        const[cartItems, setCartItems] = useState([])

            const addToCart = (product) => {
                setCartItems([...cartItems, product])
            }

            const IncreaseQty = (id) => (
                setCartItems(cartItems.map((item) =>(
            //...item is lye likhty hain taa k is ki saari properties ko copy kr k rakha jaa sake aur sirf quantity ko update kiya jaa sake property mean id title waghera.
                    item.id === id ? {...item, quantity: item.quantity + 1} : item
                )))
            )
            const DecreaseQty = (id) => (
                setCartItems(cartItems.map((item) => (
                    item.id === id ? {...item, quantity: item.quantity - 1} : item
                )))
            )
            const removeCartItem = (id) => {
                setCartItems(cartItems.filter((item) => item.id !== id))
            }
   return (
    <CartContext.Provider value={{cartItems, setCartItems, addToCart, IncreaseQty, DecreaseQty, removeCartItem}}>
        {children}
    </CartContext.Provider>
  )
}


export {CartContext};
export default CartContextProvider;
