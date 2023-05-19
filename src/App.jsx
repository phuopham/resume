import React from 'react'
import { useEffect, useState } from 'react'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Target from './components/Target'

function App() {
  const [resume, setResume] = useState({})
  useEffect(() => {
    fetch('resume.json').then(response => {
      response.json().then(resume => {
        setResume(resume)
        console.log(resume)
      })
    })
  }, [])
  return (
    <div className='max-w-[1280px] m-auto'>
      <Navbar />
      <div className='md:grid md:grid-cols-3'>
        {resume.profile && <Profile data={resume.profile} />}
        <div className='col-span-2'>
          {resume.target && <Target data={resume.target} />}
        </div>
        <div className='col-span-2'>
          {resume.skills && <Skills data={resume.skills} />}
        </div>
        <div>
          <div>
            <img src={viteLogo} className="logo" alt="Vite logo" />
            <img src={reactLogo} className="logo react" alt="React logo" />
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            {JSON.stringify(resume)}
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div >
  )
}

export default App
