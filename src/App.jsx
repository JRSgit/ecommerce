import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Cart from "./pages/cart/Cart.jsx";
import Login from "./pages/login/Login.jsx";
import Product from "./pages/product/Product.jsx";
import Products from "./pages/products/Products.jsx";
import Register from "./pages/register/Register.jsx";
import ProductList from "./pages/productList/ProductList.jsx";
import Success from './pages/success/Success.jsx';
import { useSelector } from 'react-redux';



const App = () => {
  const user = useSelector((state) => state.user.currentUser)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={user ? <Home /> : <Login />} />
        <Route path='/register' element={<Register />} />

        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/products/categories' element={<ProductList />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/success' element={<Success />} />
      </Routes>



    </BrowserRouter>
  )
};

export default App;
