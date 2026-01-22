import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Project from './components/Projects'
import Testimonial from './components/Testimonials'
import Team from './components/TeamSection'
import TrustSection from './components/TrustSection'
import ProjectCTA from './components/ProjectCTA'
import Footer from'./components/Footer';

function App() {
  
  return (
    <>
   <Navbar/>
   <Hero/>
   <Services />
   <Project/>
   <Testimonial/>
   <Team/>
   <TrustSection/>
   <ProjectCTA/>
   <Footer/>

   </>
  )
}

export default App
