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
        }
    ]
  return (
    <>
        <div className='h-[10vh] w-screen flex flex-row justify-center items-center'>
            <div className='w-[80%] h-full flex flex-row justify-center items-center'>
                <div className='w-1/4'>
                    Quiz App
                </div>
                <div className='w-2/4 flex flex-row justify-between items-center'>
                    { links.map((link,index)=>(
                        <NavLink key={index} to={link.path} className='cursor-pointer'>
                            {link.name}
                        </NavLink>
                        ))
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar