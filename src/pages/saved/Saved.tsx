import React from 'react'
import NotAvailable from "@/assets/Not-available.jpg"
import { useNavigate } from 'react-router-dom'

const Saved = () => {
  const navigate = useNavigate()

  return (
    <div className='container mx-auto mt-4 flex flex-col items-center justify-center'>
      <h2 className='text-4xl font-semibold mb-8'>Saved Movies</h2>

      <div className='flex flex-col items-center justify-center'>
        <img src={NotAvailable} alt="Not Available" className='w-[350px] rounded-lg object-cover' />
        <button onClick={() => navigate("/movies")} className='mt-5 text-xl font-semibold py-2 px-8 bg-slate-200 dark:bg-[#111] rounded-md cursor-pointer'>Go Back</button>
      </div>
    </div>
  )
}

export default React.memo(Saved)