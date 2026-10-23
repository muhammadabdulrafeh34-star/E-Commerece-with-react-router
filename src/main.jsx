import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import CartContextProvider from './context/CartContext.jsx'
import { Provider } from 'react-redux'
import Store from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <CartContextProvider> */}
    <Provider store={Store}>
    <App />
    </Provider>
    {/* </CartContextProvider> */}
  </StrictMode>,
)
