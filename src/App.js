import React from "react";
import { BrowserRouter as Router} from 'react-router-dom'
import { GlobalStyle } from "./globalStyles";
import Navbar from "./components/Navbar/index";
import Hero from "./components/pages/Home";
import Products from "./components/Products";
import { productData } from './components/Products/data'
import { HeroContainer } from "./components/pages/HeroElements";

function App() {
  return (
    <Router>
      <HeroContainer>
        <Navbar />
        <GlobalStyle />
        <Hero />
        <Products heading='Food Delivery in Gotham City' data={productData}/>
      </HeroContainer>

    </Router>
  );
};
export default App;
