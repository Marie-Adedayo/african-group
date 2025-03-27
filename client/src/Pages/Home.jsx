'use client'
import AboutStats from '../Components/About'
import ResearchGrid from '../Components/research'
import ServicesLayout from '../Components/Services'


const Home = () => {

  return (
    <main className="relative">
      <div className="w-full">
        <AboutStats />
        <ServicesLayout />
        <ResearchGrid />
        
      </div>
    </main>
  )
}

export default Home
