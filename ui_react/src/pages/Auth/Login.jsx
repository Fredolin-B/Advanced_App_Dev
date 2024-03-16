import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    
<div>
  <div class="relative flex flex-col bg-transparent shadow-none bg-clip-border items-center bg-bgImage bg-no-repeat">
    <span class="text-2xl text-black font-bold">Login to your account</span>
    <div class="mt-4 bg-white shadow-md rounded-lg text-left">
      
      <div class="px-8 py-6 ">
        <label class="block font-semibold"> Username or Email </label>
        <input type="text" placeholder="Email" class="border w-full h-5 px-3 py-5 mt-2 focus:ring-1 rounded-md peer  border-green-green-200 outline outline-0border-t-transparent 
            bg-transparent font-sans text-sm font-normal text-green-green-700  transition-all 
            placeholder-shown:border placeholder-shown:border-green-green-200 placeholder-shown:border-t-green-green-200 
            focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 
            disabled:border-0 disabled:bg-green-green-50"/>
        <label class="block mt-3 font-semibold"> Username or Email </label>
        <input type="password" placeholder="Password" class="border w-full h-5 px-3 py-5 mt-2 focus:ring-1 rounded-md peer  border-green-green-200 outline outline-0border-t-transparent 
            bg-transparent font-sans text-sm font-normal text-green-green-700  transition-all 
            placeholder-shown:border placeholder-shown:border-green-green-200 placeholder-shown:border-t-green-green-200 
            focus:border-2 focus:border-green-900 focus:border-t-transparent focus:!border-t-green-900 focus:outline-0 
            disabled:border-0 disabled:bg-green-green-50"/>
          <div class="flex justify-between items-baseline">
            <button type="submit" class="mt-4 bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-900 ">Login</button>
            <a href="#" class="text-sm hover:underline">Forgot password?</a>
          </div>
      </div>
    </div>
 </div>
</div>
  )
}

export default Login