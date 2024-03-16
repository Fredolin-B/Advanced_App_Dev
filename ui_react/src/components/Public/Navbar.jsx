import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const links=
    [
        {
            name:'Home',
            path:'/'
        },
        {
            name:'Contact',
            path:'/contact'
        },
        {
            name:'Login',
            path:'/login'
        },
        {
            name:'Register',
            path:'/register'
        }
    ]
  return (
    <>
        <div className='h-[10vh] w-screen flex flex-row justify-center items-center'>
            <div className='w-[80%] h-full flex flex-row justify-center items-center'>
                <div className='w-3/4'>
                    TailWindCss
                    </div>
                
                <div className='w-3/12 flex flex-row justify-center'>
                <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    { links.map((link,index)=>(
                        <NavLink key={index} to={link.path} className='cursor-pointer'>
                            {link.name}
                        </NavLink>
                        ))
                    }
                </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar