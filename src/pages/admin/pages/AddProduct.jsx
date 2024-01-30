import React, { useContext } from 'react'
import { Context } from '../../../context/data/MyContext'
import { Link } from 'react-router-dom';

function AddProduct() {
    const {firestoreProducts,setFirestoreProducts,addProductInFireStore} = useContext(Context);

    return (
        <div>
            <div className=' flex justify-center items-center '>
                <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                    <div className="">
                        <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    </div>
                    <div>
                        <input type="text"
                            value={firestoreProducts.name}
                            onChange={(e)=>setFirestoreProducts({...firestoreProducts, name:e.target.value})}
                            name='title'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input type="text"
                         value={firestoreProducts.price}
                         onChange={(e)=>setFirestoreProducts({...firestoreProducts, price:e.target.value})}
                            name='price'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input type="text"
                         value={firestoreProducts.imageUrl}
                         onChange={(e)=>setFirestoreProducts({...firestoreProducts, imageUrl:e.target.value})}
                            name='imageurl'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input type="text"
                         value={firestoreProducts.category}
                         onChange={(e)=>setFirestoreProducts({...firestoreProducts, category:e.target.value})}
                            name='category'
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                       <textarea cols="30" rows="10" name='description'
                        value={firestoreProducts.description}
                        onChange={(e)=>setFirestoreProducts({...firestoreProducts, description:e.target.value})}
                            className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'>

                       </textarea>
                    </div>
                    <div className=' flex justify-center mb-3'>
                   
                        <button
                            onClick={addProductInFireStore}
                            className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>

                                
                            Add Product
                              
                        </button>
                      
                    </div>
                 
                </div>
            </div>
        </div>
    )
}

export default AddProduct