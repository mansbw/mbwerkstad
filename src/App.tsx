import { ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { motion, AnimatePresence } from "motion/react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen selection:bg-foreground selection:text-background">
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none studio-grid" />
      
      <Navigation />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

const PageWrapper = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={
            <PageWrapper>
              <Contact />
            </PageWrapper>
          } />
          <Route path="/projekt" element={
            <PageWrapper>
              <Projects />
            </PageWrapper>
          } />
          {/* Fallback to start page */}
          <Route path="*" element={<PageWrapper><Contact /></PageWrapper>} />
        </Routes>
      </Layout>
    </Router>
  );
}

