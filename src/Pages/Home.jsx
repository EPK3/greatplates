import React from 'react';
import mainLogo from '../img/logo-main.webp';
import { IoFastFoodOutline } from 'react-icons/io5';

const Home = () => {
  return (
    <div className='flex bg-lime h-[100vh]'>
      <div className='flex justify-center bg-lime w-[95%] h-[90%] border-4 border-white rounded-lg m-auto'>
        <div className='justify-center content-center m-auto'>
          <img src={mainLogo} alt='Something went wrong...' className='w-[90%] m-auto'/>
          <h1 className='text-white text-center xl:text-4xl mt-10'>Search thousands of Great Plates recipes using the ingredients you already have!</h1>
          <div className='inline-flex justify-center align-middle mx-auto my-12 text-center w-full'>
            <input type='text' placeholder='Chicken, Rice, Avacado...' className='w-3/4 h-10 p-5 outline-none text-black rounded-l-lg'/>
            <div className='flex h-10 w-12 bg-green rounded-r-lg justify-center cursor-pointer hover:opacity-90'>
              <IoFastFoodOutline className='text-center text-white text-2xl m-auto'/>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Home