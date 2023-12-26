import React from 'react'
import { Navbar, Hero, Leaderboard, Footer } from '../../components'
import { SkillsSection } from '../../features/skills/components'
import { QuizSection } from '../../features/quiz/components'
import { ShortsSection } from '../../features/shorts/components'
import { CourseSection } from '../../features/course/components'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className="mt-40 md:mt-20">
      <Leaderboard/>
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