import axios from "axios";
import { Timestamp, addDoc, collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fireDb } from "../../firebase/firebaseConfig";


const Context = createContext();

const MyContext = (props) => {


  // const [product, setProduct] = useState([]);
  const [count, setCount] = useState([]);
  const [error, setError] = useState(false);
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
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((success) => {
  //       setProduct(success.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);


  // react toastify
  const notify = (msg) =>{
    console.log(msg)
    toast(msg);
  } 


  // save user in localhost
  const loginUser = (user) => {
    setUser(user);
    localStorage.setItem('ebharat',JSON.stringify(user))
  };


  // get user from localstorage
  useEffect(
    ()=>{
      let lsData = localStorage.getItem('ebharat');
      setUser(JSON.parse(lsData))
    },[]
  )

  // logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('ebharat')
  }


  // Add Data In FireStore Databse

  const [firestoreProducts,setFirestoreProducts] = useState(
    {
      name:null,
      price:null,
      imageUrl:null,
      category:null,
      description:null,
      time:Timestamp.now(),
      date:new Date().toLocaleString(
        "en-US",
        {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }
      )
    }
  )


    // ********************** Add Product Section  **********************

    const addProductInFireStore = async () =>{

      console.log(firestoreProducts)

      if(firestoreProducts.name != null && firestoreProducts.price != null && firestoreProducts.imageUrl != null && firestoreProducts.category != null && firestoreProducts.description != null  ){

        // create refrence
        const ProductRef = collection(fireDb,'products')

        try {
          await addDoc(ProductRef,firestoreProducts)
        } catch (error) {
          console.log(error)
        }

      }else{
        console.log("All Fields Are Required")
      }
    } 


     // ********************** Get Product Section  **********************

     const [Products,setProducts] = useState([])

     const getProductFromFireStore = async () => {
        try {

          // create query
          const q = query(collection(fireDb,'firestoreProducts'),
          orderBy('time')
          );

          const data = onSnapshot(q, (QuerySnapshot)=>{
            // create empty array
            let getProducts = [];

            QuerySnapshot.forEach((doc)=>{
              getProducts.push({...doc.data(),id:doc.id()})
            })

            setProducts(getProducts);
          })

          return () => data
          
        } catch (error) {
          console.log(error)
        }
     }



    //  ********************** Get Product First Rendring  **********************

     useEffect(
      ()=>{
        getProductFromFireStore()
      },[]
     )


  return (
    <Context.Provider value={{ count, addToCart, removeFromCart, loginUser, setError, notify,logout,user, firestoreProducts,setFirestoreProducts,addProductInFireStore}}>
    
     
      {props.children}
    
    </Context.Provider>
  );
};

export default MyContext;

export { Context };

