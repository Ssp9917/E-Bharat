import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

const MyContext = (props) => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState([]);

  // add data to cart
  const addToCart = (cartId) => {
    console.log(cartId);
    if(count.indexOf(cartId) == -1){
        setCount([...count,cartId])
    }
  };

  // remove data from cart
  const removeFromCart = (removeIndex) => {
    console.log(removeIndex)

    if(count.length == 1){
        localStorage.removeItem('cartData')
    }
   const  newCount = count.filter(
      (d)=>{
        if(d==removeIndex) return false
        else return true
      }
    )
    setCount(newCount)
  };

  //  add Cart data to localHost
  useEffect(
    ()=>{
        if(count.length != 0){
            localStorage.setItem('cartData',JSON.stringify(count))
        }
    },[count]
  )




  //   get Cart data From localhost
  useEffect(
    ()=>{
      let  lsData = localStorage.getItem('cartData');
        if(lsData!=null){
            setCount(JSON.parse(lsData))
        }
    },[]
  )


  // get data from api
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((success) => {
        setProduct(success.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Context.Provider value={{ product, count, addToCart, removeFromCart }}>
      {props.children}
    </Context.Provider>
  );
};

export default MyContext;

export { Context };
