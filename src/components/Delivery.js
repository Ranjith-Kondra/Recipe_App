import React from 'react'
// import { BsFillHamburgerFill } from 'react-icons/bs';
import {BsFillCartFill , BsPerson} from 'react-icons/bs'

import deliveryapp_phone_logo from '../assets/images/deliveryapp_phone_logo.png'

const Delivery = () => {
  return (
    <div className='w-full bg-chite py-16 px-4'>
        <h3 className='text-black-500 font-bold text-2xl text-center'><u><span className='font-bold text-red-700'>KONDRA's</span> CUISINES</u> </h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4' src={deliveryapp_phone_logo} />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get the App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p>
                "Every meal is an opportunity to create memories. 
                With our food, we're not just delivering dishes; we're delivering moments of joy, togetherness, and satisfaction. 
                Trust us to turn your ordinary day into an extraordinary one, bite by bite."
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery