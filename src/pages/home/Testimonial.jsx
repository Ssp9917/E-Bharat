import React from 'react'
import user1 from '../../Assets/user1.jpg'

import user3 from '../../Assets/user3.jpg'

const Testimonial = () => {

    const userReview = [
        {
            img:user1,
           
            desc:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia debitis dolor nesciunt soluta, incidunt sed accusamus praesentium, officiis iusto fuga repellendus, in ut deleniti consectetur aperiam? Quasi sunt vitae necessitatibus!',
            name:'User-3',
            position:'CEO'

        },
        {
            img:user3,
            desc:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia debitis dolor nesciunt soluta, incidunt sed accusamus praesentium, officiis iusto fuga repellendus, in ut deleniti consectetur aperiam? Quasi sunt vitae necessitatibus!',
            name:'User-2',
            position:'Web-Developer'

        },
       
        {
            img:user1,
            desc:' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia debitis dolor nesciunt soluta, incidunt sed accusamus praesentium, officiis iusto fuga repellendus, in ut deleniti consectetur aperiam? Quasi sunt vitae necessitatibus!',
            name:'User-4',
            position:'Web-designer'

        },
    ]

  return (
    <div>
        <div >
           <h1 className='text-center font-bold text-2xl mt-3 mb-1'> Testimonial</h1>
            <h2 className='text-center mb-2 text-xl font-medium'>What our <span className='text-pink-500'>Customers</span> are saying</h2>
        </div>
        <div className='flex gap-9 justify-center'>
            {
                userReview.map(
                    (d,i)=>{
                        return(
                            <div className="w-72 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                           
                            <div className="flex flex-col items-center pb-10">
                              <div
                                className="w-24 h-24 mb-3 rounded-full shadow-lg flex justify-center items-center text-4xl text-red-500 overflow-hidden">
                                    <img src={d.img} alt="" />
                              </div>
                              <h5 className="text-sm text-gray-500 dark:text-gray-400 text-center">
                                {d.desc}
                              </h5>
                              <span className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                                {d.name}
                              </span>
                              <h4>{d.position}</h4>
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

export default Testimonial