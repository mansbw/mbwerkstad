import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const location = useLocation();
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-foreground/10">
      <div className="flex items-center justify-between px-6 md:px-10 h-20">
        <Link to="/" className="font-sans font-bold text-xl tracking-tighter shrink-0">
          mbw.<span className="tracking-widest">ERKSTAD</span>
        </Link>

        <div className="flex items-center gap-8 md:gap-12">
          <Link 
            to="/projekt" 
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.3em] transition-opacity hover:opacity-100",
              location.pathname === "/projekt" ? "opacity-100 font-bold" : "opacity-40"
            )}
          >
            Projekt
          </Link>
          <Link 
            to="/" 
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.3em] transition-opacity hover:opacity-100",
              location.pathname === "/" ? "opacity-100 font-bold" : "opacity-40"
            )}
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}

