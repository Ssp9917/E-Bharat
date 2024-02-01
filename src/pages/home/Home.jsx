import React, { useContext } from "react";
import myContext from "../../context/data/MyContext";
import Banner from "./Banner";
import Collection from "./Collection";
import Traking from "./Traking";
import Testimonial from "./Testimonial";


const Home = () => {
    const context = useContext(myContext)
    // console.log(context)
  return (
    <>
   
     <>
        <Banner/>
        <Collection/>
        <Traking/>
        <Testimonial/>
     </>
    </>
  );
};

export default Home;
