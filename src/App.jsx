import React from 'react'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Skills from './components/Skills'
import Target from './components/Target'
import Career from './components/Career'
import Education from './components/Education'
import Languages from './components/Languages'
import Portfolio from './components/Portfolio'

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
        <div>
          {resume.profile && <Profile data={resume.profile} />}
          {resume.languages && <Languages data={resume.languages} />}
          {resume.education && <Education data={resume.education} />}
        </div>
        <div className='col-span-2'>
          {resume.target && <Target data={resume.target} />}
          {resume.career && <Career data={resume.career} />}
        </div>
        <div className='col-span-2'>
          {resume.skills && <Skills data={resume.skills} />}
        </div>
        <div className='col-span-3'>
          {resume.portfolio && <Portfolio data={resume.portfolio} />}
        </div>
      </div>
    </div >
  )
}

export default App
