import React, {useState} from 'react'

const CartContext = React.createContext()


const CartContextProvider = ({children}) => {
        const[cartItems, setCartItems] = useState([])
        const[wishListItems, setWishListItems] = useState([])

            const addToCart = (product) => {
                  const existingItemIndex = cartItems.findIndex((items) => items.id === product.id)
                if(existingItemIndex >= 0){
                    const updated = [...cartItems];
                    updated[existingItemIndex].quantity += 1;
                    setCartItems(updated);
                }else{
                    setCartItems([...cartItems, {...product, quantity: 1}])
                }   
            }
             const toogleWishList = (product) => {
                    const exist = wishListItems.some((item) => item.id === product.id)
                if(exist){
                    setWishListItems(wishListItems.filter((item) => item.id !== product.id))
                }else{
                    setWishListItems([...wishListItems, product])
                }
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
            const cartTotal = cartItems.reduce((total, item) => (
                total + item.price * item.quantity
            ), 0)
            const clearCart = () => {
                setCartItems([])
            }
   return (
    <CartContext.Provider value={{cartItems, 
    setCartItems,
     addToCart,
     IncreaseQty,
     DecreaseQty, removeCartItem, cartTotal, clearCart, toogleWishList, wishListItems}}>
        {children}
    </CartContext.Provider>
  )
}   


export {CartContext};
export default CartContextProvider;
