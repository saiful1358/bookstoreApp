import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";

function Signup() {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      console.log(data); // Logs form data to the console
    };
  
  return (
    <>

    <div className='flex h-screen items-center justify-center'>
    <div  className="w-[600px]">
        <div className="modal-box">
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">SignUP</h3>

    <div className='mt-4 space-y-2'>
        <span>First Name</span><br />
        <input type="text" placeholder='Enter Your First Name' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("firstName", { required: "First Name is required" })} 
         />
         {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
    </div>

    <div className='mt-4 space-y-2'>
        <span>Last Name</span><br />
        <input type="text" placeholder='Enter Your Last Name' className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("lastName", { required: "Last Name is required" })} 
         />
         {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
    </div>

    

    <div className='mt-4 space-y-2'>
        <span>Email</span><br />
        <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
         {...register("email", { required: "Email is required" })} 
         />
         {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
    </div>

    <div className='mt-4 space-y-2'>
        <span>Password</span><br />
        <input type="text" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none '
        {...register("password", { required: "Password is required" })}
         />
         {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
    </div>

    
    <div className='mt-4 space-y-2'>
        <span>Confirm Password</span><br />
        <input type="text" placeholder='Enter Your Confirm Password' className='w-80 px-3 py-1 border rounded-md outline-none ' />
    </div>

    {/* button */}

    <div className='flex mt-4 justify-around'>
        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-purple-700 duration-200'>SignUP</button>
        <p>Have Account? 
            <button  className='underline text-blue-400 cursor-pointer'
            onClick={() => 
              document.getElementById("my_modal_3").showModal()
              }>
                Login
              </button>
              <Login/>
        </p>
    </div>
    </form>

  </div>
        </div>
    </div>
    
    </>
  )
}

export default Signup