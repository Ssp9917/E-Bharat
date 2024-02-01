import React from 'react'
import { GiBeachBag } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";
import { MdCurrencyRupee } from "react-icons/md";

const Traking = () => {
    const track = [
        {
            img:<GiBeachBag/>,
            title:'Premium Tshirts',
            desc:'Our T-Shirts are 100% made of cotton.'
        },
        {
            img:<FaTruckFast/>,
            title:'Premium Tshirts',
            desc:'Our T-Shirts are 100% made of cotton.'
        },
        {
            img:<MdCurrencyRupee/>,
            title:'Premium Tshirts',
            desc:'Our T-Shirts are 100% made of cotton.'
        }
    ]

  return (
    <div>
        <div className='flex justify-center font-bold text-3xl mt-2 pb-1  '>
            <h1 className='w-[250px] border-b-pink-500 border-b-4 text-center pb-2 mb-2'>Our Services</h1>
        </div>
        <div className='flex justify-center gap-12'>
            {
                track.map(
                    (d,i)=>{
                        return(
                            <div key={i} className="w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           
                            <div className="flex flex-col items-center pb-10">
                              <div
                                className="w-24 h-24 mb-3 rounded-full shadow-lg flex justify-center items-center text-4xl text-red-500">{d.img}
                                
                              </div>
                              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                {d.title}
                              </h5>
                              <span className="text-sm text-gray-500 dark:text-gray-400">
                                {d.desc}
                              </span>
                             
                            </div>
                          </div>
                          
                        )
                    }
                )
            }
        </div>
    </div>
  )
}

export default Traking