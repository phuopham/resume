import React from 'react'

const Target = ({ data }) => {
    return (
        <div className='flex flex-col items-center shadow-md py-7 m-1 border border-slate-100 bg-slate-800 text-slate-50 px-2 rounded-xl'>
            <div className='uppercase text-xl text-green-400 font-bold'>
                My current target
            </div>
            <div className='text-slate-50 text-center'>
                {data.current}
            </div>
        </div>
    )
}

export default Target