import React from 'react'
import img from '../../public/profile.jpg'

const Profile = ({ data }) => {
    return (
        <div className='flex flex-col items-center shadow-md pb-8 m-1 border border-slate-100 rounded-xl'>
            <div className='relative w-full rounded-t-xl'>
                <div className='bg-slate-800 h-[10rem] absolute top-0 left-0 w-full z-[-1] rounded-t-xl'></div>
                <div className='shadow-md border-8 border-green-400 rounded-full p-1 m-auto bg-slate-50 w-4/5 mt-8'>
                    <img className='rounded-full' src={img} alt="" />
                </div>
            </div>
            <div className='font-bold text-xl uppercase mt-3'>{data.name_en}</div>
            <div className='text-slate-400 mt-[-0.5em]'>{data.name_vi}</div>
            <div className='font-bold uppercase'>{data.title || 'Web developer | IT engineer'}</div>
            <div className='mt-3 font-bold'>{data.tel}</div>
            <div className='font-bold'>{data.email}</div>
            <a href={data.github}>{data.github}</a>
            <a href={data.linkedin} >{data.linkedin}</a>
        </div>
    )
}

export default Profile