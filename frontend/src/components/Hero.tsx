import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />
      
      {/* Floating Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => <div key={i} className="particle" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${4 + Math.random() * 4}s`
      }} />)}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/30 mb-8 animate-fade-up">
          <Zap className="w-4 h-4 text-primary icon-pulse" />
          <span className="font-mono text-xs text-primary tracking-widest">The Treasury Syndicate - A Decentralized Autonomous Organization</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-7xl xl:text-8xl mb-6 tracking-wider animate-fade-up-delay-1">
          <span className="text-glow">DECENTRALIZED</span>
          <br />
          <span className="text-glow">MARKETING</span>
          <br />
          <span className="text-primary text-glow-primary">OPERATIONS</span>
        </h1>

        {/* Subheadline */}
        <p className="font-heading text-lg text-muted-foreground tracking-wider mb-6 animate-fade-up-delay-2 font-bold lg:text-2xl">Crowdsourced Capital. Decentralized Command. Special-Ops Execution.</p>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-muted-foreground text-base mb-10 leading-relaxed animate-fade-up-delay-3 lg:text-xl">Bitcoin treasuries sacrifice marketing spend for acquisition. The world, outside of our own, hardly knows we exist...but that is where we step in. From smart contract based capital raising, to behind the scenes research and deliberation, through decentralized voting and execution — The Treasury Syndicate is an intelligence and operations unit. Pool capital. Vote on campaigns. Execute in masterful synchrony.</p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
          <Link to="/proposals">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading tracking-wider px-8 btn-glow">
              ENTER OPERATIONS
            </Button>
          </Link>
          <Link to="/proposals">
            <Button size="lg" variant="outline" className="border-muted-foreground/50 text-foreground hover:border-primary hover:text-primary font-heading tracking-wider px-8">
              VIEW PROPOSALS
            </Button>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="mt-16 lg:mt-24 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[{
          value: "$2.4M",
          label: "DEPLOYED"
        }, {
          value: "47",
          label: "OPERATORS"
        }, {
          value: "12",
          label: "ACTIVE OPS"
        }].map((stat, index) => <div key={index} className="glass-card p-4 lg:p-6 animate-scale-in" style={{
          animationDelay: `${0.4 + index * 0.1}s`
        }}>
              <p className="stat-number mb-1">{stat.value}</p>
              <p className="font-mono text-xs text-muted-foreground tracking-wider">
                {stat.label}
              </p>
            </div>)}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default Hero;