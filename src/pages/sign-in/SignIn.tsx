import React from 'react'
import Facebook from "@/assets/faceboook.svg"
import Google from "@/assets/google.svg"

const SignIn = () => {
  return (
    <div className='w-full container mx-auto mt-12 relative flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-[32px] leading-[38px] font-medium'>Sign In</h2>
            <p className='text-[16px] leading-[24px] text-[#777777] mt-4 mb-8'>Enter your phone number to log in or sign up.</p>

            <form action="" className='flex flex-col items-center justify-center gap-6'>
                <input type="text" placeholder='Phone number' />
                <button className='cursor-pointer text-[16px] leading-5 font-medium px-[140px] py-4 bg-[#C61F1F] rounded-[12px]'>Registration</button>
            </form>

            <p className='text-[16px] leading-[24px] text-[#777777] my-6'>or</p>

            <div className='flex items-center justify-center gap-2'>
                <button className='cursor-pointer px-10 py-5 bg-[#111111] rounded-[12px] w-[186px] flex items-center justify-center gap-2'>
                    <img src={Facebook} alt="Facebook" />
                    <h4 className='text-[16px] leading-5 font-medium'>Facebook</h4>
                </button>
                <button className='cursor-pointer px-10 py-5 bg-[#111111] rounded-[12px] w-[186px] flex items-center justify-center gap-2'>
                    <img src={Google} alt="Google" />
                    <h4 className='text-[16px] leading-5 font-medium'>Google</h4>
                </button>
            </div>
        </div>
    </div>
  )
}

export default React.memo(SignIn)