import React from 'react'
import { IoHeart } from 'react-icons/io5'

const Cards = () => {
  return (
    <div className='flex flex-col justify-center w-[400px] border-l-4 border-lime m-12 shadow-md hover:scale-105 hover:shadow-lg'>
        <div className='flex justify-center w-[350px] mx-auto mt-5'>
            <img src='https://spoonacular.com/recipeImages/716429-556x370.jpg' alt='Something went wrong...' className='rounded-md m-auto'/>
        </div>
        <div className='flex justify-center content-center m-5'>
            <div className='flex flex-2 content-center m-auto'>
                <h1 className='text-black text-lg overflow-hidden m-auto mr-5'>Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</h1>
            </div>
            <div className='inline-flex flex-1 justify-end content-center m-auto'>
                <h1 className='text-2xl'>3</h1>
                <IoHeart className='text-4xl text-[#E33CA9]' />
            </div>
        </div>
    </div>
  )
}

export default Cards