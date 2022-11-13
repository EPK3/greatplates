import React from 'react';
import mainLogo from '../img/logo-main.webp';
import background from '../img/main-background.webp';
import { IoFastFoodOutline } from 'react-icons/io5';

const Home = () => {
  return (
    <div style={{ backgroundImage: `url('${background}')` }} className='flex h-[100vh] bg-center bg-cover'>
      <div className='flex justify-center bg-gradient-to-b from-lime to-green w-[90%] h-[60%] xl:w-[60%] xl:h-[60%] border-4 border-white rounded-lg m-auto'>
        <div className='justify-center content-center m-auto'>
          <img src={mainLogo} alt='Great Plates Logo' className='w-[80%] m-auto'/>
          <h1 className='text-white text-center text-lg xl:text-2xl mt-10 mx-2'>Search thousands of Great Plates recipes using the ingredients you already have!</h1>
          <div className='inline-flex justify-center align-middle mx-auto  my-5 xl:my-12 text-center w-full'>
            <input type='text' placeholder='Chicken, Rice, Avacado...' className='w-3/4 h-10 p-5 outline-none text-black rounded-l-lg'/>
            <div className='flex h-10 w-12 bg-lime rounded-r-lg justify-center cursor-pointer hover:opacity-90'>
              <IoFastFoodOutline className='text-center text-white text-2xl m-auto'/>
            </div>
          </div>
        </div>
      </div>    
    </div>
  )
}

export default Home