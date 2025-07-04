import React from 'react'
import NotFount from "@/assets/not-found.png"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-slate-200 dark:bg-[#111]/90'>
        <img src={NotFount} alt="NotFound" width={800} className='rounded-lg' />
        <button onClick={() => navigate("/")} className='mt-10 cursor-pointer py-2 px-8 rounded-md font-medium text-lg bg-[#111] text-white'>Go Home</button>
    </div>
  )
}

export default React.memo(NotFound)