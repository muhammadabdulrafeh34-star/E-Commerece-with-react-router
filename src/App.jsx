import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./pages/Home"
import ProductPage from './pages/ProductPage'
import RootLayout from './components/RootLayout'
import ProductDetailPage from './pages/ProductDetailPage'
import Cart from './pages/Cart'

function App(){
const router = createBrowserRouter([
  {
  path: "/",
  element: <RootLayout/>,
  children: [
  {
    path: "/",
    element: <Home/>
  },
  {
    path:"ProductPage",
    element: <ProductPage/>
  },
  {
    path: "ProductDetailPage/:id",
    element:<ProductDetailPage/>
  },
  {
    path:"Cart",
    element:<Cart/>
  }
]
}
])

  return <RouterProvider router={router}/>
}

export default App