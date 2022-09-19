import "./App.css";
import Header from "./components/header/Header";
import Checkout from "./components/checkout/checkout";
import Home from "./components/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useEffect, useState } from "react";

export const AppContex = createContext(null);

function App() {
  const [dataapi, setdata] = useState();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setdata(json))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <AppContex.Provider value={{ dataapi, setdata, cart, setCart }}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </AppContex.Provider>
  );
}

export default App;
