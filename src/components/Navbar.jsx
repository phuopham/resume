import React from 'react'
const Navbar = () => {
    return (
        <>
            <div className='fixed top-0 left-0 right-0 bg-slate-800 text-slate-50 p-2 my-1 print:hidden
        mx-3 rounded-xl shadow-sm z-10'>
                <div className='max-w-[1280px] m-auto flex items-center justify-between'>
                    <div className='font-bold'><a href="/"><span className='text-green-400 uppercase'>Phuong</span>'s RESUME</a></div>
                    <button className='text-bold uppercase px-3 rounded-full bg-green-400 font-semibold text-slate-900' onClick={() => window.print()}>Print</button>
                </div>
            </div>
            <div className="m-4 p-4"></div>
        </>
    )
}

export default Navbar