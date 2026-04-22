import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, animate } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send, MapPin, Phone, Mail, Upload, Info } from "lucide-react";
import { SLIDESHOW_IMAGES } from "../constants";

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({ left: 0, right: 0 });
  const x = useMotionValue(0);

  const controlsRef = useRef<any>(null);

  const startAnimation = () => {
    if (containerRef.current) {
      const contentWidth = containerRef.current.scrollWidth;
      const halfWidth = contentWidth / 2;
      setConstraints({ left: -halfWidth, right: 0 });
      
      controlsRef.current = animate(x, -halfWidth, {
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      });
    }
  };

  useEffect(() => {
    startAnimation();
    return () => controlsRef.current?.stop();
  }, [x]);

  return (
    <div className="min-h-screen pt-28 lg:pt-32 pb-20">
      <div className="px-6 md:px-12 mb-6 lg:mb-32">
        <div className="max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-20 gap-y-12">
          {/* Left Column Container */}
          <div className="order-1 lg:col-start-1 flex flex-col h-full w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:mb-0"
            >
              <h1 className="font-sans text-xl md:text-5xl font-bold tracking-tight uppercase mb-4">Få ett prisförslag på ditt projekt</h1>
              
              <div className="mb-6 lg:mb-24">
                <p className="text-lg opacity-70 leading-relaxed max-w-sm">
                  Jag vill göra det svåra enkelt. Berätta vad du behöver, så ritar, bygger och monterar jag din nya favoritplats. Inget projekt är för litet, och inget för stort. Platsbyggda möbler eller unika objekt - utan krångel.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="order-3 lg:order-none mt-0"
            >
              <div className="grid grid-cols-2 gap-8 font-mono text-[10px] uppercase tracking-widest opacity-60">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-foreground mb-4">
                    <Mail className="w-4 h-4" />
                    <span>Mail</span>
                  </div>
                  <p>mansbw@gmail.com</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-foreground mb-4">
                    <Phone className="w-4 h-4" />
                    <span>Telefon</span>
                  </div>
                  <p>+46 70 686 69 49</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-foreground mb-4">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <p>Jakobdalsvägen 15<br />Stockholm</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="order-2 lg:order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 bg-background px-6 py-10 md:p-12 border border-foreground/10 rounded-2xl w-full lg:mt-0"
          >
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest ml-4">Ditt Namn</Label>
                  <Input 
                    id="name" 
                    placeholder="Namn" 
                    className="border-0 border-b border-foreground/10 rounded-xl px-4 py-6 text-lg focus-visible:ring-0 focus-visible:border-foreground hover:bg-foreground/[0.03] transition-colors bg-transparent" 
                  />
                </div>

                <div className="space-y-4">
                  <Label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-widest ml-4">Telefonnummer</Label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="070-000 00 00" 
                    className="border-0 border-b border-foreground/10 rounded-xl px-4 py-6 text-lg focus-visible:ring-0 focus-visible:border-foreground hover:bg-foreground/[0.03] transition-colors bg-transparent" 
                  />
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest ml-4">E-post</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="namn@exempel.se" 
                  className="border-0 border-b border-foreground/10 rounded-xl px-4 py-6 text-lg focus-visible:ring-0 focus-visible:border-foreground hover:bg-foreground/[0.03] transition-colors bg-transparent" 
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="budget" className="font-mono text-[10px] uppercase tracking-widest ml-4">Budget</Label>
                <Select>
                  <SelectTrigger className="border-0 border-b border-foreground/10 rounded-xl px-4 py-8 text-lg focus:ring-0 focus:border-foreground shadow-none hover:bg-foreground/[0.03] transition-colors bg-transparent h-auto">
                    <SelectValue placeholder="$$$" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl border-foreground/10 bg-[#e0c09d]">
                      <SelectItem value="$$$">$$$:-</SelectItem>
                    <SelectItem value="0-5k">Under 5 000:-</SelectItem>
                    <SelectItem value="5-10k">5 000 - 10 000:-</SelectItem>
                    <SelectItem value="10-20k">10 000 - 20 000:-</SelectItem>
                    <SelectItem value="20-30k">20 000 - 30 000:-</SelectItem>
                    <SelectItem value="30-40k">30 000 - 40 000:-</SelectItem>
                    <SelectItem value="40-50k">40 000 - 50 000:-</SelectItem>
                    <SelectItem value="50k+">50 000:-+</SelectItem>

                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label htmlFor="location" className="font-mono text-[10px] uppercase tracking-widest ml-4">Plats</Label>
                <Input 
                  id="location" 
                  placeholder="Din stad" 
                  className="border-0 border-b border-foreground/10 rounded-xl px-4 py-6 text-lg focus-visible:ring-0 focus-visible:border-foreground hover:bg-foreground/[0.03] transition-colors bg-transparent" 
                />
                <div className="flex items-start gap-2 mt-2 opacity-50 px-4">
                  <Info className="w-3 h-3 mt-1" />
                  <p className="text-[10px] font-mono leading-tight uppercase tracking-tight text-foreground">
                    Jag utgår från Stockholm och erbjuder frakt oavsett var du bor.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest ml-4">Berätta om ditt projekt</Label>
                <Textarea 
                  id="message" 
                  placeholder="Beskriv din vision..." 
                  className="min-h-[120px] border-0 border-b border-foreground/10 rounded-xl px-4 text-lg focus-visible:ring-0 focus-visible:border-foreground resize-none hover:bg-foreground/[0.03] transition-colors bg-transparent" 
                />
              </div>

              <div className="space-y-4">
                <Label className="font-mono text-[10px] uppercase tracking-widest ml-4">Referenser & Bilder</Label>
                <div className="border border-dashed border-foreground/20 p-8 flex flex-col items-center justify-center gap-4 hover:border-foreground/40 hover:bg-foreground/[0.03] transition-all cursor-pointer group rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Upload className="w-5 h-5 opacity-40" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs font-mono uppercase tracking-widest mb-1">Dra filer hit eller klicka för att ladda upp</p>
                    <p className="text-[10px] text-muted-foreground uppercase opacity-50">PDF, JPG, PNG (Max 10MB)</p>
                  </div>
                </div>
              </div>

              <Button size="lg" className="w-full py-8 text-lg font-mono uppercase tracking-[0.2em] group rounded-xl">
                Skicka Förfrågan
                <Send className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Rolling & Grabbable Slideshow */}
      <div 
        className="border-t border-b border-foreground/10 py-10 overflow-hidden"
        style={{ 
          cursor: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTggMjBWNE04IDEyaDEwTTE4IDEydjgiLz48L3N2Zz4=') 12 12, auto`
        }}
        ref={containerRef}
        onMouseEnter={() => controlsRef.current?.pause()}
        onMouseLeave={() => controlsRef.current?.play()}
        onMouseDown={() => controlsRef.current?.pause()}
        onMouseUp={() => controlsRef.current?.play()}
      >
        <motion.div 
          drag="x"
          dragConstraints={constraints}
          style={{ x }}
          className="flex gap-10 whitespace-nowrap w-fit px-12"
          onDragStart={() => {
            controlsRef.current?.stop();
          }}
          onDragEnd={() => {
            startAnimation();
          }}
        >
          {/* Double the images for seamless loop */}
          {[...SLIDESHOW_IMAGES, ...SLIDESHOW_IMAGES].map((img, i) => (
            <div 
              key={i} 
              className="w-72 md:w-96 aspect-square bg-foreground/5 flex-shrink-0 border border-foreground/10 overflow-hidden rounded-2xl"
            >
              <img 
                src={img} 
                alt={`Hantverk ${i}`} 
                className="w-full h-full object-cover transition-all duration-700 pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>


    </div>
  );
}

