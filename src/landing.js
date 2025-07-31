import React from "react";
import Card from "./card";  
import Navbar from "./home";
import Contact from './contact';
import Review from './review';
import About from './about';



const Landing = ({ cartItems }) => {
  return (
    <>
      <Navbar cartItems={cartItems} />
      <Card />  
      <About/>
      <Review/>     
      <Contact/> 
    </>
  );
};


export default Landing;
