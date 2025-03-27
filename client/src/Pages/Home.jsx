'use client'
import AboutStats from '../Components/About'
import ResearchGrid from '../Components/research'
import ServicesLayout from '../Components/Services'
import Navbar from '../Components/Navbar'


const Home = () => {

  return (
    <main className="relative">
      <Navbar />
      <div className="w-full">
      
        <AboutStats />
        <ServicesLayout />
        <ResearchGrid />
        
      </div>
    </main>
  )
}

export default Home
