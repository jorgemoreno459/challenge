import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/search/components/Search";
import ProductPage from "./pages/product/components/ProductPage";
import DetailProductPage from "./pages/product/components/DetailProductPage";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div
            data-testid={'container'}
            className={'container'}
            style={{background: '#ccc9c0'}}
          >
              <Search />
              <Routes>
                  <Route path='/items/search/:text' element={<ProductPage/>} />
                  <Route path='/items/:id' element={<DetailProductPage/>} />
                  <Route path="/" element={<></>} />
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
