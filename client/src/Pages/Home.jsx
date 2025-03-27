'use client'
import AboutStats from '../Components/About'
import PeopleSection from '../Components/People'
import ResearchGrid from '../Components/research'
import ServicesLayout from '../Components/Services'
import Navbar from '../Components/Navbar/Navbar'
import Hero  from '../Components/Hero'


const Home = () => {

  return (
    <main className="relative">
      <Navbar />
      <div className="w-full">
        <Hero />
      
        <AboutStats />
        <ServicesLayout />
        <ResearchGrid />
        <PeopleSection />
        
      </div>
    </main>
  )
}

export default Home
