import { Link } from "react-router-dom";
import { Twitter, MessageCircle, Github, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "Proposals", path: "/proposals" },
      { label: "About", path: "/about" },
      { label: "Documentation", path: "#" },
      { label: "Tokenomics", path: "#" },
    ],
    community: [
      { label: "Discord", path: "#", icon: MessageCircle },
      { label: "Twitter", path: "#", icon: Twitter },
      { label: "GitHub", path: "#", icon: Github },
    ],
  };

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-16 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded border border-primary/50 flex items-center justify-center bg-primary/10">
                <span className="font-heading text-primary text-sm font-bold">
                  TS
                </span>
              </div>
              <span className="font-heading text-sm tracking-wider text-foreground">
                THE TREASURY SYNDICATE
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Decentralized marketing operations for Bitcoin treasury companies.
              Pool capital. Vote on campaigns. Execute collectively.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {links.community.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.path}
                    className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-heading text-sm tracking-wider mb-4">PRODUCT</h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    {link.path === "#" && (
                      <ExternalLink className="w-3 h-3" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-heading text-sm tracking-wider mb-4">LEGAL</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Risk Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-mono tracking-wider">
            © {currentYear} THE TREASURY SYNDICATE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-xs text-muted-foreground font-mono tracking-wider">
            DECENTRALIZED AUTONOMOUS ORGANIZATION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
