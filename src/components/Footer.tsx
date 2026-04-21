import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/10 bg-background text-foreground">
      <div className="px-6 md:px-10 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-sans font-bold text-lg tracking-tighter uppercase">måns.verkstad</span>
        <div className="flex gap-10 font-mono text-[10px] uppercase tracking-widest opacity-40">
          <span>© {new Date().getFullYear()}</span>
          <span>Stockholm - Sweden</span>
        </div>
      </div>
    </footer>
  );
}

