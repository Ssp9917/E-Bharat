import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Context = createContext();

const MyContext = (props) => {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState([]);
  const [error, setError] = useState(false);
  const [msg, setMsg] = useState("");
  const [user, setUser] = useState(null);



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



  const notify = () => toast(`${msg}`);



  const loginUser = (user) => {
    setUser(user);
    localStorage.setItem('quiz',JSON.stringify(user))
  };


  // get Data from localstorage
  useEffect(
    ()=>{
      let lsData = localStorage.getItem('quiz');
      setUser(JSON.parse(lsData))
    },[]
  )

  return (
    <Context.Provider value={{ product, count, addToCart, removeFromCart, loginUser, setMsg, setError, notify,user}}>
      {props.children}
    </Context.Provider>
  );
};

export default MyContext;

export { Context };
