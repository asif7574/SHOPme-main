import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Welcome from "./pages/Welcome";
import Main from "./pages/Main";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Detail from "./pages/Detail";

import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/men's clothing"
              element={<Main category="men's clothing" />}
            />
            <Route
              path="/women's clothing"
              element={<Main category="women's clothing" />}
            />
            <Route path="/jewelery" element={<Main category="jewelery" />} />
            <Route
              path="/electronics"
              element={<Main category="electronics" />}
            />
            <Route path="home/:code" element={<Detail />} />
            <Route path="men's clothing/:code" element={<Detail />} />
            <Route path="women's clothing/:code" element={<Detail />} />
            <Route path="jewelery/:code" element={<Detail />} />
            <Route path="electronics/:code" element={<Detail />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
