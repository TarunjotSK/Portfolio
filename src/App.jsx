import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

const App = () =>{
  return (
    <BrowserRouter>
     <div className="realtive z-0 bg-primary">
     <p>NODE_ENV value is "{JSON.stringify(process.env)}"</p>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
     </div>
    </BrowserRouter>  // BrowserRouter makes the app fully accessible and works across different browsers
  )
}

export default App
