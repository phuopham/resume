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
                    <div className=' bg-slate-200 px-2'>{data[0].major}</div>
                    <div className='rounded-b-xl bg-slate-800 p-2 flex flex-wrap gap-1 flex-col items-start text-sm'>
                        <div className='rounded-full bg-green-400 px-2 text-slate-50'>
                            {data[0].to}
                        </div>

                    </div>
                </li>
                <li>
                    <div className='rounded-t-xl text-slate-800 bg-green-400 px-2 font-semibold uppercase'>{data[1].institute}</div>
                    <div className=' bg-slate-200 px-2'>{data[1].major}</div>
                    <div className='rounded-b-xl bg-slate-800 p-2 flex flex-wrap gap-1 items-start text-sm'>
                        <div className='rounded-full bg-green-400 px-2 text-slate-50'>
                            {data[1].to}
                        </div>
                        <div className='rounded-full bg-green-400 px-2 text-slate-50'>
                            {data[1].status}
                        </div>
                    </div>
                </li>
            </ul>
        </div >
    )
}

export default Education