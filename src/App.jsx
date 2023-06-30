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
import Others from './components/Others'

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
        <div className='sm:grid grid-cols-2 md:block'>
          {resume.profile && <Profile data={resume.profile} />}
          <div>
            {resume.languages && <Languages data={resume.languages} />}
            {resume.education && resume.certificates && <Education education={resume.education} certificates={resume.certificates} />}
            {resume.profile && <Others data={resume.profile} />}
          </div>
          <div>
            {resume.portfolio && <Portfolio data={resume.portfolio} />}
          </div>
        </div>
        <div className='col-span-2'>
          {resume.target && <Target data={resume.target} />}
          {resume.career && <Career data={resume.career} />}
          {resume.skills && <Skills data={resume.skills} />}
        </div>
      </div>
      <div className='hidden w-1/6'></div>
      <div className='hidden w-2/6'></div>
      <div className='hidden w-3/6'></div>
      <div className='hidden w-4/6'></div>
      <div className='hidden w-5/6'></div>
    </div >
  )
}

export default App
