import React from 'react'

const Others = ({ data }) => {
    return (
        <div className='shadow-md m-1 pb-7 border border-slate-100 rounded-xl'>
            <div className='uppercase text-xl font-bold text-green-400 bg-slate-800 py-7 text-center rounded-t-xl'>
                Others
            </div>
            <ul className='flex gap-2 flex-wrap p-2'>
                <li>
                    <div className='rounded-t-xl text-slate-800 bg-green-400 px-2 font-semibold uppercase'>{data.others.status}</div>
                    <div className='bg-slate-800 rounded-b-xl flex flex-col items-start p-2 gap-1'>
                        {data.others.children.map((item, key) => (
                            <div key={key} >
                                <div className='rounded-t-xl text-slate-800 bg-green-400 px-2 text-sm'>{item.gender == "female" ? 'Daughter' : 'Son'}</div>
                                <div className='rounded-b-xl text-slate-50 bg-slate-400 px-2 text-sm'>{item.born}</div>
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <div className='rounded-t-xl text-slate-800 bg-green-400 px-2 font-semibold uppercase'>Interests</div>
                    <div className='rounded-b-xl bg-slate-800 p-2 flex flex-wrap gap-1 flex-col items-start text-sm'>
                        {data.interests.map((item, key) => (
                            <div key={key} className=' rounded-full bg-green-400 px-2 text-sm'>
                                {item}
                            </div>
                        ))}
                    </div>

                </li>
            </ul>
        </div>
    )
}

export default Others