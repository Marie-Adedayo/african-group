'use client'
import AboutStats from '../Components/About'
import PeopleSection from '../Components/People'
import ResearchGrid from '../Components/research'
import ServicesLayout from '../Components/Services'


const Home = () => {

  return (
    <main className="relative">
      <div className="w-full">
        <AboutStats />
        <ServicesLayout />
        <ResearchGrid />
        <PeopleSection />
        
      </div>
    </main>
  )
}

export default Home
