import React from 'react'

const Profile = ({ data }) => {
    return (
        <div className='w-[300px] flex flex-col items-center shadow-md pb-8'>
            <div className='relative w-full'>
                <div className='bg-slate-800 h-[10rem] absolute top-0 left-0 w-full z-[-1]'></div>
                <div className='shadow-md border-8 border-green-400 rounded-full p-1 m-auto bg-slate-50 w-4/5 mt-8'>
                    <img className='rounded-full' src="/profile.jpg" alt="" />
                </div>
            </div>
            <div className='font-bold text-xl uppercase'>{data.name_en}</div>
            <div className='text-slate-400 mt-[-0.5em]'>{data.name_vi}</div>
            <div className='font-bold uppercase'>{data.title || 'Web developer | IT engineer'}</div>
            <div className='mt-3 font-bold'>{data.tel}</div>
            <div className='font-bold'>{data.email}</div>
            <a href={data.github}>{data.github}</a>
            <a href="" className='text-red-800'>Link linkedin</a>
        </div>
    )
}

export default Profile