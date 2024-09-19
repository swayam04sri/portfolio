import React, { useState } from 'react'
import pic from "../../public/photopf.avif"
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
function Navbar() {

  const[menu,setMenu]=useState(false)
  const navitems=[
    {
      id:1,
      text:"Home"
    },
    {
      id:2,
      text:"About"
    },
    {
      id:3,
      text:"Portfolio"
    },
    {
      id:4,
      text:"Experience"
    },
    {id:5,
      text:"Conact"
    },]
  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0'>
   <div className='flex justify-between items-center h-16'>
    <div className='flex space-x-2'>
        <img src={pic} className='h-12 w-12 rounded-full' alt=''/>
        <h1 className='font-semibold text-xl cursor-pointer'>Swayam <span className='text-blue-600 text-2xl'>srivastava</span>
        <p className='text-sm'>Web developer</p></h1>
    </div>
    <div>
        <ul className='hidden md:flex space-x-8'>
           {
            navitems.map(({id,text})=>(
              <li className=" hover:scale-105 duration-75 cursor-pointer" key={id}>{text}</li>
            ))
           }
        </ul>
        <div onClick={()=>setMenu(!menu)} className='md:hidden'>{menu?<AiOutlineMenu  size={24}/>:<IoClose size={24}/>}</div>
    </div>
   </div>
   {  menu && (

<div>
<ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4'>
{
            navitems.map(({id,text})=>(
              <li className=" hover:scale-105 duration-75 cursor-pointer"  key={id}>{text}</li>
            ))
           }
     </ul>
</div>
   )


   }
   
    </div>
  )
}

export default Navbar
