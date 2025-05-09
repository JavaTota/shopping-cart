import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./css/App.css";
import Home from "./components/Home";
import Card from "./components/Cart";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
