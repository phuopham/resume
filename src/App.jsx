import React from 'react'
import { useEffect, useState } from 'react'
import Profile from './components/Profile'
import Target from './components/Target'
import Career from './components/Career'
import Education from './components/Education'
import Languages from './components/Languages'
import Others from './components/Others'
import Skill2 from './components/Skill2'

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
    <>
      <div className='md:grid grid-cols-3'>
        <div className='block'>
          {resume.profile && <Profile data={resume.profile} />}
          <div>
            {resume.target && <Target data={resume.target} />}
            <div className='hidden md:block'>
              {resume.languages && <Languages data={resume.languages} />}
              {resume.skills && <Skill2 data={resume.skills} />}
              {resume.education && resume.certificates && <Education education={resume.education} certificates={resume.certificates} />}
              {resume.profile && <Others data={resume.profile} />}
            </div>
            {/* <div className='h-20'></div> */}
          </div>
          <div>
            {resume.portfolio && <Portfolio data={resume.portfolio} />}
          </div>
        </div>
        <div className='col-span-2'>
          {resume.career && <Career data={resume.career} />}
          <div className='block md:hidden'>
            {resume.skills && <Skill2 data={resume.skills} />}
            {resume.languages && <Languages data={resume.languages} />}
            {resume.education && resume.certificates && <Education education={resume.education} certificates={resume.certificates} />}
            {resume.profile && <Others data={resume.profile} />}
          </div>
        </div>
      </div>
      <div className='hidden w-1/6'></div>
      <div className='hidden w-2/6'></div>
      <div className='hidden w-3/6'></div>
      <div className='hidden w-4/6'></div>
      <div className='hidden w-5/6'></div>
    </ >
  )
}

export default App
