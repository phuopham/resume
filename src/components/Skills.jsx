import React from 'react'

const Skills = ({ data }) => {
    const progressBar = (self_rate, catalog) => {
        if (self_rate < 6) return `w-${self_rate}/6 bg-slate-900 absolute top-0 left-0 h-full mix-blend-multiply rounded-xl z-[-1]`
        return `w-full bg-slate-900 absolute top-0 left-0 h-full mix-blend-multiply rounded-xl z-[-1]`
    }
    const sortedData = data.sort((a, b) => a.catalog.localeCompare(b.catalog))
    const groupedData = data.reduce((acc, obj) => {
        const key = obj['catalog'];
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(obj);
        return acc;
    }, {})
    return (
        <div className='shadow-md m-1 pb-7 border border-slate-100 rounded-xl'>
            <div className='uppercase text-xl font-bold text-green-400 bg-slate-800 py-7 text-center rounded-t-xl'>
                Skills
            </div>
            <ul className='p-3'>
                {Object.keys(groupedData).map((key) => (
                    <li key={key}>
                        <div className='text-end font-semibold rounded-full px-2 bg-green-400'>{key}</div>
                        {groupedData[key].map((skill, index) => (
                            <div key={index} className=' m-1 px-2'>
                                <div className='relative ps-2 pe-8'>
                                    <span className='text-green-400 uppercase font-semibold'>
                                        {skill.object + " "}
                                    </span>
                                    {skill.experienced_with != '' && <span className='text-sm text-slate-300 mix-blend-exclusion'>- {skill.experienced_with.map((item, key) => key == 0 ? item : (', ' + item))} ...</span>}
                                    <div className={progressBar(skill.self_rate, skill.catalog)}></div>
                                    <div className='z-[-2] h-full bg-slate-200 w-full absolute top-0 left-0 right-0 rounded-xl text-end px-2'>{skill.self_rate}/5</div>
                                </div>
                                <div className='text-slate-800 whitespace-pre-wrap px-2'>{skill.detail}</div>
                            </div>
                        ))}
                    </li>
                ))}

            </ul>
        </div >
    )
}

export default Skills