import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Context } from "../../context/data/MyContext";
import Model from "../model/Model";
import { addDoc, collection } from "firebase/firestore";
import { fireDb } from "../../firebase/firebaseConfig";

const Cart = () => {
  // const { product, count} = useContext(FilterContext);
  const {products,count} = useContext(Context)

  

  // cart item found

  let cartProduct = [];
  let total = 0

  if (count.length != 0) {
    cartProduct = products.filter((d) => {
      if (count.indexOf(d.id) == -1) return false;
      else return true;
    });
  }








  // ************************************** Payment Getway Code Start ***********************************


  const [name,setName] = useState('');
  const [address,setAddress] = useState('');
  const [pincode,setPincode] = useState('');
  const [phoneNumber,setPhoneNumber] =useState('');


  // create buynow function
  const buyNow = () =>{
    if(name != '' && address != '' && pincode != '' && phoneNumber != ''){

      // save addressInfo in a object

      const addressInfo = {
        name,
        address,
        phoneNumber,
        pincode,
        date: new Date().toLocaleString(
          "en-US",
          {
            month: "short",
            day: "2-digit",
            year: "numeric",
          }
        )
      }

      // razor pay main function
      var options = {
        key: "rzp_test_WbuupPlP94gvQA",
        key_secret: "Ub6JjLuuoQRj2Hy3pZGpIiHi",
        amount: parseInt(500),
        currency: "INR",
        order_receipt: 'order_rcptid_' + name,
        name: "E-Bharat",
        description: "for testing purpose",
        handler:function(response){
          console.log(response)

          alert('Paiment Successful')

          const paymentId = response.rozorpay_payment_id


          // store in firebase help of add doc method
          const orderInfo = {
            cartProduct,
            addressInfo,
            date: new Date().toLocaleString(
              'en-US',
              {
                month:'short',
                day:"2-digit",
                year:"numeric"
              }
            ),
            email:JSON.parse(localStorage.getItem('ebharat'))?.email,
            userid:JSON.parse(localStorage.getItem('ebharat')).uid,
            paymentId
          }



          try {
            const result = addDoc(collection(fireDb,"orders"),orderInfo)
            alert('order add successful')
          } catch (error) {
            console.log(error)
          }

        },

        theme:{
          color:"#3399cc"
        }
        
      }


      var pay = new window.Razorpay(options);

      pay.open();
      console.log(pay)
    }else{
      alert("All fields are required") 
    }
  }

  // ************************************** Payment Getway Code End ***********************************

 

  return (
    <>
   
    <div className="flex h-full flex-col overflow-y-scroll bg-white ">
      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h2
            className="text-lg font-medium text-gray-900"
            id="slide-over-title"
          >
            Shopping cart
          </h2>
          <div className="ml-3 flex h-7 items-center">
            <button
              type="button"
              className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
            >
              <Link to="/">
                {" "}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </Link>
            </button>
          </div>
        </div>
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {cartProduct.map((d, i) => {
               total += d.price
                return <CartItem total={total} image={d.imageUrl} title={d.title} price={d.price} id={d.id} />; 
              })}
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <Model  name={name} address={address} pincode={pincode} phoneNumber={phoneNumber} setName={setName} setAddress={setAddress} setPincode={setPincode} setPhoneNumber={setPhoneNumber} buyNow={buyNow}/>
    </>
  );
};

export default Cart;

const CartItem = ({image,title,price,id}) => {
//  let  total = 0;
  // total += price
  const {removeFromCart} = useContext(Context)

  const [qty, setQty] = useState(1);

  const qtyUpHandler = () => {
    if (qty >= 1) {
      setQty(qty + 1);
    }
  };

  const qtyDownHandler = () => {
    if (qty != 1) {
      setQty(qty - 1);
    }
  };
 
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={image}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="#">{title}</a>
            </h3>
            <p className="ml-4">${Math.floor(price)*qty}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Salmon</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500 flex gap-1 text-xl items-center">
            Qty {qty}
            <div>
              <span onClick={qtyUpHandler}>
                <IoMdArrowDropupCircle />
              </span>
              <span onClick={qtyDownHandler}>
                <IoMdArrowDropdownCircle />
              </span>
            </div>
          </p>
          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
export {CartItem}