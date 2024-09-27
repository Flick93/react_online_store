import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import About from "./pages/About";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalProvider from "./state/GlobalProvider";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar></Navbar>

          <Routes>
            <Route path="/" element={<Home></Home>} />
            <Route path="/catalog" element={<Catalog></Catalog>} />
            <Route path="/about" element={<About></About>} />
            <Route path="/admin" element={<Admin></Admin>} />
            <Route path="/contact" element={<Contact></Contact>} />
            <Route path="/cart" element={<Cart></Cart>} />
          </Routes>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
