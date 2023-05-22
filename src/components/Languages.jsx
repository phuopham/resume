import React from 'react'

const Languages = ({ data }) => {
    return (
        <div className='shadow-md m-1 pb-7 border border-slate-100 rounded-xl'>
            <div className='uppercase text-xl font-bold text-green-400 bg-slate-800 py-7 text-center rounded-t-xl'>
                Languages
            </div>
            <ul className='flex gap-2 flex-wrap p-2'>
                {data.map((lang, key) => (
                    <li key={key}>
                        <div className='rounded-t-xl text-slate-800 font-semibold bg-green-400 px-2 uppercase'>{lang.object}</div>
                        <div className={`${lang.experience_from == '' ? 'rounded-b-xl' : ''} bg-slate-200 px-2`}>{lang.detail}</div>
                        {!lang.experience_from == '' && <div className='rounded-b-xl text-slate-50 bg-slate-800 p-2 flex flex-wrap items-start'>
                            <div className='px-2 text-sm bg-green-400 text-slate-50 rounded-full'>{lang.experience_from}</div>
                        </div>}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Languages