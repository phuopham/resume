import React from 'react'
const Navbar = () => {
    return (
        <>
            <div className='fixed top-0 left-0 right-0 bg-slate-800 p-2 my-1 print:hidden
        mx-3 rounded-xl shadow-sm z-10'>
                <div className='max-w-[1280px] m-auto flex items-center justify-between'>
                    <div className='font-bold'><a href="/" className='text-slate-50 '><span className='text-green-400 uppercase'>Phuong</span>'s RESUME</a></div>
                    <div className='flex gap-1'>
                        <a className='px-3 rounded-full bg-green-400 font-semibold text-slate-900' href="https://drive.google.com/file/d/1rse9PJRFI59d9mcdnxAKMNTa7OIaM9xi/view?usp=sharing"><svg width="18px" height="18px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <g id="Complete">
                                <g id="download">
                                    <g>
                                        <path d="M3,12.3v7a2,2,0,0,0,2,2H19a2,2,0,0,0,2-2v-7" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                                        <g>
                                            <polyline data-name="Right" fill="none" id="Right-2" points="7.9 12.3 12 16.3 16.1 12.3" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />

                                            <line fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="2.7" y2="14.2" />
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg></a>
                        <button className='text-bold uppercase px-3 rounded-full bg-green-400 font-semibold text-slate-900' onClick={() => window.print()}>Print</button>
                    </div>
                </div>
            </div>
            <div className="m-3 p-3 print:hidden"></div>
        </>
    )
}

export default Navbar