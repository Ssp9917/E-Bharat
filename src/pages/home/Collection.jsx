import React, { useContext } from 'react'
import { Context } from '../../context/data/MyContext'
import { useNavigate } from 'react-router-dom'

const Collection = () => {

    const {products,addToCart} = useContext(Context)
    const navigate = useNavigate()
  return (
    <div>
        <div className='flex justify-center font-bold text-3xl mt-2 pb-1  '>
            <h1 className='w-[350px] border-b-pink-500 border-b-4 text-center pb-2'>Our Latest Collection</h1>
        </div>
        <div className="flex gap-5 justify-center flex-wrap">
        {products.map((d, i) => {
          return (
            <div key={i} onClick={()=>navigate(`/productinfo/${d.id}`)} className="w-64 bg-white shadow-md rounded-xl mt-4 duration-500 hover:scale-105 hover:shadow-xl">
              
                <img
                  src={d.imageUrl}
                  alt="Product"
                  className="h-64 text-center object-cover rounded-t-xl p-5"
                />
                <div className="px-4 py-3 w-64">
                  <span className="text-gray-400 mr-3 uppercase text-xs">
                    {d.category}
                  </span>
                  <p className="text-lg font-bold text-black truncate block capitalize">
                    {d.name}
                  </p>
                  <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">
                      ${d.price}
                    </p>
                    <del>
                      <p className="text-sm text-gray-600 cursor-auto ml-2">
                        $199
                      </p>
                    </del>
                    <div className="ml-auto" >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-bag-plus"
                        viewBox="0 0 16 16"
                        onClick={()=>{addToCart(d.id)}}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                        />
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                      </svg>
                    </div>
                  </div>
                 
                </div>
            
            </div>
          );
        })}
      </div>

    </div>
  )
}

export default Collection