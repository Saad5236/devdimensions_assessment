import HeroSection from "./components/HeroSection/HeroSection"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/services"
import GetStarted from "./components/getStarted"
import Benefits from "./components/benefits"
import StartRequest from "./components/startrequest"
import Advantages from "./components/advantages"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import ProjectSection from "./components/ProjectsSection/ProjectSection"
import Footer from "./components/footer"

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Services />
      <GetStarted />
      <ProjectSection />
      <Testimonials />
      <Benefits />
      <Advantages />
      <StartRequest />
      <Contact />
      <Footer />
      <div className="py-5 text-center">
        Copyright © 2020 LeadPage. Designed by Epic-Themes
      </div>
    </>
  )
}

export default App
