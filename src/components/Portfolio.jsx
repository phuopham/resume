import React from 'react'

const Portfolio = ({ data }) => {

    return (
        <div className='shadow-md m-1 pb-7 border border-slate-100 rounded-xl'>
            <div className='uppercase text-xl font-bold text-green-400 bg-slate-800 py-7 text-center rounded-t-xl' >
                Portfolio
            </div >
            <div className='md:grid p-2 gap-2 grid-cols-3'>
                {data.map((proj, key) => (
                    <div key={key} className=' my-2 '>
                        <div className='rounded-t-xl px-2 bg-green-400 md:my-0'>{proj.project}</div>
                        <div className='bg-slate-200 md:hidden'>
                            Link: <a href={proj.link} className='hover:underline text-sm px-2'>{proj.link}</a>
                        </div>
                        {proj.demo && <div className='bg-slate-200 md:hidden'>
                            Demo: <a href={proj.demo} className='hover:underline text-sm px-2'>{proj.demo}</a>
                        </div>}
                        <div className='bg-slate-200 flex flex-wrap gap-1 p-2 pb-0'>
                            <div className='hidden md:block px-2 bg-slate-800 text-slate-200 rounded-full '><a href={proj.link}>Link</a></div>
                            {proj.demo && <div className='hidden md:block px-2 bg-slate-800 text-slate-200 rounded-full '><a href={proj.demo}>Demo</a></div>}
                            <div className='px-2 bg-slate-800 text-slate-200 rounded-full '>{proj.start_date}</div>
                            <div className='px-2 bg-slate-800 text-slate-200 rounded-full '>{proj.period}</div>
                            <div className='px-2 bg-slate-800 text-slate-200 rounded-full '>{proj.status}</div>
                            {proj.award && <div className='px-2 bg-slate-800 text-slate-200 rounded-full '>{proj.award}</div>}
                        </div>
                        <div className='px-2 bg-slate-200 pb-2 whitespace-pre-wrap'>{proj.description}</div>
                        <div className='flex flex-wrap gap-1 bg-slate-800 rounded-b-xl p-1'>{proj.catalog.map((item, key) => (
                            <div key={key} className='px-2 rounded-full bg-green-400 text-slate-800 text-sm'>
                                {item}
                            </div>
                        ))}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio