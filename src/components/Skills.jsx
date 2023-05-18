import React from 'react'

const Skills = ({ data }) => {
    const progressBar = (self_rate, catalog) => {
        if (self_rate < 5) return `w-${self_rate}/5 bg-slate-900 absolute top-0 left-0 h-full mix-blend-multiply rounded-xl z-[-1]`
        return `w-full bg-slate-900 absolute top-0 left-0 h-full mix-blend-multiply rounded-xl z-[-1]`
    }
    // console.log(data)
    return (
        <div className='shadow-md m-1 flex flex-col items-center py-7'>
            <div className='uppercase text-xl font-bold'>
                Skills
            </div>
            <ul className='p-3'>
                {data.map((skill, index) => (
                    <li key={index} className='text-green-400 relative m-1 px-2'>
                        <div>
                            <span className=' uppercase font-semibold'>
                                {skill.object + " "}
                            </span>
                            {skill.experienced_with != '' && <span className='text-sm text-slate-500'>- {skill.experienced_with.map((item, key) => key == 0 ? item : (', ' + item))} ...</span>}
                            <div className={progressBar(skill.self_rate, skill.catalog)}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default Skills