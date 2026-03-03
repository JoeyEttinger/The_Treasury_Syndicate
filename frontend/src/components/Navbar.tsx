import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Crosshair } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "VOTING", path: "/proposals" },
  { label: "ABOUT", path: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded border border-primary/50 flex items-center justify-center bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Crosshair className="w-5 h-5 text-primary" />
            </div>
            <span className="font-heading text-base font-bold tracking-wider text-foreground group-hover:text-primary transition-colors">
              THE TREASURY SYNDICATE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`text-base font-bold tracking-widest transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Connect Wallet Button */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 font-mono text-base font-bold tracking-wider"
            >
              AUTHORIZE ACCESS
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden glass-nav border-t border-border/50 animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-widest py-2 transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 font-mono text-xs tracking-wider mt-2"
            >
              AUTHORIZE ACCESS
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
