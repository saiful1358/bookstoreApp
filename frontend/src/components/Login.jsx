// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form"


// function Login() {

//   const {
//     register,
//     handleSubmit,
    
//     formState: { errors },
//   } = useForm()

//   const onSubmit = (data) => console.log(data)



//   return (
//     <div>
//         <dialog id="my_modal_3" className="modal">
//         <div className="modal-box">
//     <form onSubmit={handleSubmit(onSubmit)} >
//       {/* if there is a button in form, it will close the modal */}
//       <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Login</h3>

//     <div className='mt-4 space-y-2'>
//         <span>Email</span><br />
//         <input type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none'
//         {...register("email", { required: true })} />
//     </div>

//     <div className='mt-4 space-y-2'>
//         <span>Password</span><br />
//         <input type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none '
//         {...register("password", { required: true })} />
//     </div>

//     {/* button */}

//     <div className='flex mt-4 justify-around'>
//         <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-purple-700 duration-200'>Login</button>
//         <p>Not register? 
//             <Link to="/signup" className='underline text-blue-400 cursor-pointer'>SingUP</Link>
//         </p>
//     </div>


//   </div>
//         </dialog>
//     </div>
//   )
// }

// export default Login



import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Logs form data to the console
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Modal close button */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-4 space-y-2">
              <span>Email</span><br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span><br />
              <input
                type="password"
                placeholder="Enter Your Password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* Submit button */}
            <div className="flex mt-4 justify-around">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-purple-700 duration-200"
              >
                Login
              </button>
              <p>
                Not registered? 
                <Link to="/signup" className="underline text-blue-400 cursor-pointer">Sign Up</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
