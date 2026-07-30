import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import InitialLoader from "./components/InitialLoader";
import ShortLinkRedirector from "./components/ShortLinkRedirector";

// ── Main portfolio page ────────────────────────────────────────────────────────
const PortfolioPage = ({ showContent }) => (
  <div
    className={`relative z-0 transition-all duration-[1200ms] ease-out ${
      showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
    style={{ backgroundColor: "#04020f" }}
  >
    {/* Hero section (includes its own constellation bg + navbar) */}
    <div>
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
      <Footer />
    </div>
  </div>
);

// ── App root ──────────────────────────────────────────────────────────────────
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
      <Routes>
        {/* Main portfolio — hash anchors (#work, #contact, etc.) work normally */}
        <Route path="/" element={<PortfolioPage showContent={showContent} />} />

        {/* Short-link handler — any /:key not matched above */}
        <Route path="/:key" element={<ShortLinkRedirector />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

