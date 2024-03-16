import React from 'react'
import { Link } from 'react-router-dom'
function Register() {
  return (
    <div class="relative flex flex-col bg-transparent shadow-none bg-clip-border items-center bg-bgImage bg-no-repeat">
    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-black-900">
      SIGN UP
    </h4>
    <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-black-700">
      Nice to meet you! Enter your details to register.
    </p>
    <div className='mt-4 bg-white shadow-lg rounded-lg text-left w-1/4 flex items-center justify-center'>
    <form class="max-w-screen-lg mt-8 mb-2 w-3/4 ">
      <div class="flex flex-col gap-6 mb-1">
        <h6
          class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-black-900">
          Your Name
        </h6>
        <div class="relative h-11 w-full min-w-[200px]" required>
          <input placeholder="abcd"
            class="peer h-full w-full rounded-md border border-green-green-200 outline outline-0border-t-transparent 
            bg-transparent px-3 py-3 font-sans text-sm font-normal text-green-green-700  transition-all placeholder-shown:border 
            placeholder-shown:border-green-green-200 placeholder-shown:border-t-green-green-200 focus:border-2 focus:border-green-900 
            focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-green-green-50" />
          </div>
        <h6
          class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-green-900">
          Your Email
        </h6>
        <div class="relative h-11 w-full min-w-[200px]" required>
          <input type="email" placeholder="abcd@gmail.com" 
            class="peer h-full w-full rounded-md border border-green-green-200 outline outline-0border-t-transparent 
            bg-transparent px-3 py-3 font-sans text-sm font-normal text-green-green-700  transition-all 
            placeholder-shown:border placeholder-shown:border-green-green-200 placeholder-shown:border-t-green-green-200 
            focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 
            disabled:border-0 disabled:bg-green-green-50" />
         </div>
        <h6
          class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-green-green-900">
          Password
        </h6>
        <div class="relative h-11 w-full min-w-[200px]" required minLength={8} maxLength={15}>
          <input type="password" placeholder="********"  
            class="peer h-full w-full rounded-md border border-green-green-200 outline outline-0border-t-transparent bg-transparent 
            px-3 py-3 font-sans text-sm font-normal text-green-green-700  transition-all placeholder-shown:border 
            placeholder-shown:border-green-green-200 placeholder-shown:border-t-green-green-200 focus:border-2 focus:border-green-900 
            focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 disabled:border-0 disabled:bg-green-green-50" />
          </div>
      </div>
      <div class="inline-flex items-center" required>
        <label class="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
          <input type="checkbox"
            class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md 
            border border-green-green-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 
            before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-green-green-500 
            before:opacity-0 before:transition-opacity checked:border-green-900 checked:bg-green-900 checked:before:bg-green-900 
            hover:before:opacity-10"
            id="remember" />
          <span
            class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 
            left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">            
          </span>
        </label>
        <label class="mt-px font-light text-black-700 cursor-pointer select-none" htmlFor="remember">
          <p class="flex items-center font-sans text-sm antialiased font-normal leading-normal text-black-700">
            I agree the
            <a href="#" class="font-medium transition-colors hover:text-green-900">
              &nbsp;Terms and Conditions
            </a>
          </p>
        </label>
      </div>
      <button
        class="mt-6 block w-full select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle 
        font-sans text-xs font-bold uppercase text-white shadow-md transition-all 
        hover:bg-green-900 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] 
        active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-lg"
        type="button"><Link to='/'>
        sign up</Link>
      </button>
      <p class="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-green-700">
        Already have an account?
        <div className="font-medium text-green-900"><Link to='/Login'>
          Sign In</Link>
        </div>
      </p>
    </form>
    </div>
  </div> 
  )
}

export default Register


