import React from 'react'
import logo from '../img/logo-main.webp'
import { IoSearchOutline, IoFastFoodOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='flex bg-gradient-to-b from-lime to-[#147F30] h-[60px] content-center m-auto'>
      <div className='inline-flex justify-between w-full content-center m-auto'>
        <img src={logo} alt='Something went wrong...' className='h-12 ml-5 justify-start content-center m-auto'/>
        <div className='inline-flex content-center justify-end mr-5'>
        <input type='text' placeholder='Chicken, Rice, Avacado...' className='hidden w-3/4 h-8 px-2 outline-none text-black rounded-lg m-auto mx-5'/>
          <IoSearchOutline className='text-white text-2xl m-auto cursor-pointer'/>
        </div>
      </div>   
    </div>
  )
}

export default Navbar