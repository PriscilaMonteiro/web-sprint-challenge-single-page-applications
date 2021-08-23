import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar/index";
import Hero from "./components/pages/Home";
import Products from "./components/Products";
import { productData } from './components/Products/data'

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <GlobalStyle />
      <Hero />
      <Products heading='Food Delivery in Gotham City' data={productData}/>

    </Router>
  );
};
export default App;
