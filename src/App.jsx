import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import Footer from "./components/Footer";
import InitialLoader from "./components/InitialLoader";
import Toast from "./components/Toast";

const BITZIPP_API = "https://bitzipp.sumitksr.xyz/api/url";

// ── Known portfolio hash-anchor slugs (never treated as short-link keys) ──────
const PORTFOLIO_ROUTES = new Set(["about", "work", "projects", "contact", "achievements"]);

// ── Main portfolio page ────────────────────────────────────────────────────────
const PortfolioPage = ({ showContent }) => {
  const [toast, setToast] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // Strip leading slash → get the key segment (e.g. "/resume" → "resume")
    const key = location.pathname.replace(/^\/+/, "").trim();

    // Ignore root path and known portfolio anchors
    if (!key || PORTFOLIO_ROUTES.has(key)) return;

    let cancelled = false;

    // Silent background fetch — user sees nothing until result
    const resolve = async () => {
      try {
        const res = await fetch(`${BITZIPP_API}/${key}`);
        if (cancelled) return;

        if (res.ok) {
          const data = await res.json();
          // Redirect to actual destination URL
          window.location.href = data?.url || `https://bitzipp.sumitksr.xyz/${key}`;
        } else {
          // Key doesn't exist → show toast, stay on portfolio
          setToast(`"/${key}" doesn't exist`);
        }
      } catch {
        if (cancelled) return;
        setToast(`Could not resolve "/${key}" — please try again later`);
      }
    };

    resolve();
    return () => { cancelled = true; };
  }, [location.pathname]);

  return (
    <>
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

      {/* Toast — shown on not-found or error, stays on top of portfolio */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </>
  );
};

// ── App root ──────────────────────────────────────────────────────────────────
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 200);
  };

  if (isLoading) {
    return <InitialLoader onComplete={handleLoaderComplete} />;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Catch ALL paths — portfolio always renders, short-link check is silent */}
        <Route path="/*" element={<PortfolioPage showContent={showContent} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
