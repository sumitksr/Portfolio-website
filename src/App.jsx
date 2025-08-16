import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import heroBg from "./assets/herobg.png";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import InitialLoader from "./components/InitialLoader";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => setShowContent(true), 200);
  };

  if (isLoading) {
    return <InitialLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <BrowserRouter>
      <div className={`relative z-0 bg-primary transition-all duration-[1200ms] ease-out ${
        showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        <div 
          className='bg-cover bg-no-repeat bg-center'
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />

          <StarsCanvas />
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
