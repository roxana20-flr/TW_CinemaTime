import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Oferte from "./pages/Oferte";
import Favorite from "./pages/Favorite";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import User from "./pages/User";
import Vauchere from "./pages/Vauchere";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log(" app")
  console.log(user)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/oferte" element={<Oferte/>}/>
        <Route path="/vauchere" element={<Vauchere/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/success" element={<Success/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>}/>
      </Routes>
    </Router>
  )
};

export default App;