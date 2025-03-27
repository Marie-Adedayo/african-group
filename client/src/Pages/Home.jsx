'use client'
import ServicesLayout from '../Components/Services'
import Navbar from '../Components/Navbar'


const Home = () => {

  return (
    <main className="relative">
      <Navbar />
      <div className="w-full">
      
        <ServicesLayout />
      </div>
    </main>
  )
}

export default Home
