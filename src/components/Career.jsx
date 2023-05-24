import React from 'react'

const Career = ({ data }) => {
    return (
        <ul className='shadow-md m-1 pb-7 border border-slate-100 rounded-xl'>
            <div className='uppercase text-xl bg-slate-800 p-7 text-center text-green-400 font-bold rounded-t-xl'>My career</div>
            {data.map((job, key) => (
                <li key={key} className='flex gap-2 p-2 flex-wrap items-start justify-between'>

                    <div className='flex flex-col'>
                        <div className='uppercase text-green-400 font-bold text-xl '>{job.company}</div>
                        <div><span className='px-2 rounded-full bg-slate-800 text-slate-50 font-semibold uppercase'>{job.title}</span></div>
                    </div>
                    <div className='px-2 text-center rounded-full bg-slate-200'>
                        {job.from} - {job.to}
                    </div>
                    <ul className='w-full bg-slate-200 rounded-xl'>{job.detail.map((detail, key) => (
                        <li key={key} className='list-disc ms-7'>
                            {detail}
                        </li>
                    ))}</ul>
                    {job.achievement && <div>
                        <div className='bg-green-400 rounded-t-xl px-2'>
                            Achievement
                        </div>
                        <ul className=' bg-slate-200 rounded-b-xl p-2'>
                            {job.achievement.map((item, key) => (
                                <li key={key} className='list-disc ms-7'>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>}
                </li>
            ))}
        </ul >
    )
}

export default Career