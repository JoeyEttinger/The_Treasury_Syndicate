import { Shield, Eye, Zap, Users, Vote, DollarSign, MessageSquare, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PathCardProps {
  type: "observer" | "operator";
}

const PathCard = ({ type }: PathCardProps) => {
  const isOperator = type === "operator";

  const content = {
    observer: {
      icon: Eye,
      badge: "INTEL ACCESS ONLY",
      title: "BECOME AN OBSERVER",
      description: "Monitor operations. Zero capital required. No voting power.",
      benefits: [
        { icon: Eye, text: "View all proposals" },
        { icon: MessageSquare, text: "Discord access (Observer tier)" },
        { icon: BookOpen, text: "Learn the operations" },
        { icon: Users, text: "Community discussions" },
      ],
      cta: "REQUEST ACCESS",
      tokenomics: null as string | null,
    },
    operator: {
      icon: Shield,
      badge: "FULL AUTHORIZATION",
      title: "BECOME AN OPERATOR",
      description: "Deploy capital. Control decisions. Direct campaigns.",
      benefits: [
        { icon: Vote, text: "Voting power (1 token = 1 vote)" },
        { icon: Users, text: "Operator Discord access" },
        { icon: Zap, text: "Create proposals" },
        { icon: DollarSign, text: "Revenue participation" },
      ],
      cta: "DEPLOY CAPITAL",
      tokenomics: "80% Campaigns | 10% Dev | 10% Ops",
    },
  };

  const data = content[type];
  const Icon = data.icon;

  return (
    <div
      className={`glass-card-hover p-6 lg:p-8 flex flex-col h-full ${
        isOperator
          ? "border-primary/30 lg:scale-105"
          : "border-muted/30 opacity-90"
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div
          className={`w-14 h-14 rounded-lg flex items-center justify-center ${
            isOperator
              ? "bg-primary/20 border border-primary/50"
              : "bg-muted/30 border border-muted/50"
          }`}
        >
          <Icon
            className={`w-7 h-7 ${
              isOperator ? "text-primary icon-pulse" : "text-muted-foreground"
            }`}
          />
        </div>
        <span
          className={`px-3 py-1 rounded text-xs font-mono tracking-wider ${
            isOperator
              ? "bg-primary/20 text-primary border border-primary/50"
              : "bg-muted/30 text-muted-foreground border border-muted/50"
          }`}
        >
          {data.badge}
        </span>
      </div>

      {/* Title & Description */}
      <h3
        className={`font-heading text-xl lg:text-2xl mb-3 ${
          isOperator ? "text-glow" : ""
        }`}
      >
        {data.title}
      </h3>
      <p className="text-muted-foreground mb-6">{data.description}</p>

      {/* Benefits */}
      <ul className="space-y-3 mb-6 flex-grow">
        {data.benefits.map((benefit, index) => {
          const BenefitIcon = benefit.icon;
          return (
            <li key={index} className="flex items-center gap-3">
              <BenefitIcon
                className={`w-4 h-4 ${
                  isOperator ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <span className="text-sm text-foreground/80">{benefit.text}</span>
            </li>
          );
        })}
      </ul>

      {/* Tokenomics (Operator only) */}
      {isOperator && data.tokenomics && (
        <div className="mb-6 p-3 rounded-lg bg-secondary/10 border border-secondary/30">
          <p className="text-xs font-mono text-secondary text-center tracking-wider">
            {data.tokenomics}
          </p>
        </div>
      )}

      {/* CTA Button */}
      <Button
        className={`w-full font-heading tracking-wider ${
          isOperator
            ? "bg-primary hover:bg-primary/90 text-primary-foreground btn-glow"
            : "bg-transparent border border-muted-foreground/50 text-muted-foreground hover:border-primary/50 hover:text-primary"
        }`}
        size="lg"
      >
        {data.cta}
      </Button>
    </div>
  );
};

const DualPathCards = () => {
  return (
    <section className="py-16 lg:py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-mono text-sm tracking-widest mb-3 animate-fade-up">
            CHOOSE YOUR PATH
          </p>
          <h2 className="font-heading text-3xl lg:text-4xl text-glow animate-fade-up-delay-1">
            JOIN THE SYNDICATE
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          <div className="animate-slide-in-left">
            <PathCard type="observer" />
          </div>
          <div className="animate-slide-in-right">
            <PathCard type="operator" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualPathCards;
