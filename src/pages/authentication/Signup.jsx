import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Context } from '../../context/data/MyContext';
import { auth } from '../../firebase/firebaseConfig';
import { toast } from 'react-toastify';

const Signup = () => {

  const { loginUser, notify } = useContext(Context);

  const navigate = useNavigate();

  const signupHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm_password = e.target.confirm_password.value;
    console.log(email,password,confirm_password)
    
    if (email != "" && password != "" && confirm_password != "") {
      console.log(email)
      if (password == confirm_password) {
        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // ...
            console.log(user);
            loginUser(user);
            notify("Account Created Successfully !");
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            notify(errorMessage);
            console.log(errorMessage)
          });
      } else {
        console.log('error')
      }
    }else{
      console.log("error main")
    }
  };


  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

    <div className='text-center text-4xl text-blue-500 font-bold'>
      Sign Up
    </div>
  
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={signupHandler}>
        <div>
          <label htmlFor="email" className="block font-medium leading-6 text-gray-900 text-xl">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-xl font-medium leading-6 text-gray-900">Password</label>
           
          </div>
          <div className="mt-2">
            <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
        <div>

          <div className="flex items-center justify-between">
            <label htmlFor="confirm_password" className="block text-xl font-medium leading-6 text-gray-900">Confirm Password</label>
           
          </div>
          <div className="mt-2">
            <input id="confirm_password" name="confirm_password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
          </div>
        </div>
  
        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
        </div>
      </form>
  
      <p className="mt-10 text-center text-gray-500 text-xl">
        Already a member?
        <Link to='/login' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500 '>Sign In</Link>
      </p>
    </div>
  </div>

  )
}

export default Signup