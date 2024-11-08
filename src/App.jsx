import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Component/Navbar/Header.jsx";
import Shop from "./Pages/Shop.jsx";
import './App.css';
import ShopCategory from "./Pages/ShopCategory.jsx";
import Product from "./Pages/Product.jsx";
import Cart from "./Pages/Cart.jsx";
import LoginSignup from "./Pages/LoginSignUp.jsx";
import Footer from "./Component/Footer/Footer.jsx";
import Checkout from "./Pages/Checkout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory  category="men" />} />
        <Route path="/arrival" element={<ShopCategory category="arrival" />} />
        <Route path="/product/:productId" element={<Product />} /> {/* Fixed the route here */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        {/* Checkout Route */}
         <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;