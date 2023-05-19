import React from 'react'

const Education = ({ data }) => {
    return (
        <div className='shadow-md m-1 pb-7 border border-slate-100 rounded-xl'>
            <div className='uppercase text-xl font-bold text-green-400 bg-slate-800 py-7 text-center rounded-t-xl'>
                Education
            </div>
            <ul className='flex gap-2 flex-wrap p-2'>
                <li>
                    <div className='rounded-t-xl text-slate-800 bg-green-400 px-2 font-semibold uppercase'>{data[0].institute}</div>
                    <div className='rounded-b-xl text-slate-50 bg-slate-800 px-2 font-light'>{data[0].major}</div>
                </li>
                <li>
                    <div className='rounded-t-xl text-slate-800 bg-green-400 px-2 font-semibold uppercase'>{data[1].institute}</div>
                    <div className='rounded-b-xl text-slate-50 bg-slate-800 px-2'>{data[1].major}</div>
                </li>
            </ul>
        </div>
    )
}

export default Education