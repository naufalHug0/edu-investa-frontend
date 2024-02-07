import React, { useEffect, useState } from 'react'
import { Navbar, Hero, Leaderboard, Footer } from '../../components'
import { SkillsSection } from '../../features/skills/components'
import { QuizSection } from '../../features/quiz/components'
import { ShortsSection } from '../../features/shorts/components'
import { CourseSection } from '../../features/course/components'
import { useOutletContext } from 'react-router'

const Home = () => {
  const userData = useOutletContext()

  return (
    <>
    <Navbar user={userData}/>
    <Hero/>
    <div className="mt-40 md:mt-20">
      <Leaderboard user_xp={userData?.total_xp}/>
      <SkillsSection/>
      <QuizSection/>
      <ShortsSection/>
      <CourseSection/>
    </div>
    <Footer className='mt-20'/>
    </>
  )
}

export default Home