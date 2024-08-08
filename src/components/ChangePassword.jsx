import React from 'react'

const ChangePassword = () => {
  return (
    <div className='space  flex justify-center w-full h-screen items-center'>
      <div className='shadow-2xl p-6'>

     <form action="" className='flex flex-col gap-2 w-96'>
     <h1 className='text-2xl font-bold text-slate-700 text-center'>Change Your Password</h1>
      <input type="password" placeholder='Enter new password...' className='text-xl px-3 py-2 rounded-lg shadow-lg ' />
      <input type="password" placeholder='Confirm new password...' className='text-xl px-3 py-2 rounded-lg shadow-lg' />
  <button className='border-2 bg-black text-white p-2 hover:bg-zinc-900'>Submit</button>
      </form> 
      </div>

    </div>
  )
}

export default ChangePassword
