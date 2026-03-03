import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Target,
  Vote,
  Zap,
  ChevronDown,
  Shield,
  Eye,
  DollarSign,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  const howItWorks = [
    {
      step: "01",
      icon: DollarSign,
      title: "DEPLOY CAPITAL",
      description:
        "Acquire governance tokens to become an Operator. Your tokens represent voting power in the syndicate.",
    },
    {
      step: "02",
      icon: Vote,
      title: "VOTE ON CAMPAIGNS",
      description:
        "Review and vote on marketing proposals. One token equals one vote. Shape the direction of Bitcoin marketing.",
    },
    {
      step: "03",
      icon: Zap,
      title: "EXECUTE COLLECTIVELY",
      description:
        "Approved campaigns are funded and executed. Track progress and results through the operations dashboard.",
    },
  ];

  const faqs = [
    {
      question: "What is The Treasury Syndicate?",
      answer:
        "The Treasury Syndicate is a decentralized autonomous organization (DAO) focused on marketing Bitcoin treasury companies. We pool resources from token holders to fund coordinated marketing campaigns for companies like MicroStrategy, Marathon Digital, and others building Bitcoin treasuries.",
    },
    {
      question: "How do I become an Operator?",
      answer:
        "To become an Operator, you need to acquire our governance tokens. This grants you voting power proportional to your holdings (1 token = 1 vote) and access to the Operator Discord channels. You can create proposals and participate in all governance decisions.",
    },
    {
      question: "What's the difference between Observer and Operator?",
      answer:
        "Observers can view all proposals and participate in community discussions but cannot vote or create proposals. Operators have full voting rights, can create proposals, and participate in revenue sharing from successful campaigns.",
    },
    {
      question: "How are funds allocated?",
      answer:
        "Treasury funds are allocated as follows: 80% goes directly to marketing campaigns approved by token holders, 10% to development and platform maintenance, and 10% to operational costs including legal, accounting, and community management.",
    },
    {
      question: "How long do proposals take to pass?",
      answer:
        "Standard proposals have a 7-day voting period. For a proposal to pass, it must receive more YES votes than NO votes and meet the minimum quorum requirement (currently 10% of total voting power).",
    },
    {
      question: "Can I change my vote?",
      answer:
        "Once submitted, votes are final and recorded on-chain. Please review proposals carefully before casting your vote. Your tokens remain locked until the voting period ends.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-16 lg:mb-24">
            <p className="text-primary font-mono text-sm tracking-widest mb-3 animate-fade-up">
              INTELLIGENCE BRIEFING
            </p>
            <h1 className="font-heading text-4xl lg:text-6xl text-glow mb-6 animate-fade-up-delay-1">
              ABOUT THE SYNDICATE
            </h1>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed animate-fade-up-delay-2">
              A decentralized marketing collective engineered for Bitcoin
              treasury companies. We operate in the shadows of traditional
              marketing, united by a singular mission.
            </p>
          </div>

          {/* Mission Section */}
          <section className="mb-16 lg:mb-24">
            <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-primary" />
                <h2 className="font-heading text-2xl">THE MISSION</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Bitcoin treasury companies face a critical challenge: they
                prioritize capital acquisition over marketing, leaving their
                stories untold and their value underappreciated by the broader
                market.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                <span className="text-primary">The Treasury Syndicate</span>{" "}
                exists to change this narrative. By pooling resources from a
                global network of operators, we execute coordinated marketing
                campaigns that amplify the Bitcoin treasury thesis and support
                the companies building the future of corporate finance.
              </p>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-16 lg:mb-24">
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm tracking-widest mb-3">
                OPERATIONAL PROTOCOL
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl text-glow">
                HOW IT WORKS
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {howItWorks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="glass-card-hover p-6 lg:p-8 text-center animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl font-heading text-primary/30 mb-4">
                      {item.step}
                    </div>
                    <div className="w-14 h-14 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg mb-3">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Treasury Allocation */}
          <section className="mb-16 lg:mb-24">
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm tracking-widest mb-3">
                RESOURCE DISTRIBUTION
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl text-glow">
                TREASURY ALLOCATION
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 animate-fade-up">
                {/* Allocation Bars */}
                <div className="space-y-6 mb-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm">
                        MARKETING CAMPAIGNS
                      </span>
                      <span className="font-mono text-xl text-primary font-bold">
                        80%
                      </span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        style={{ width: "80%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm">DEVELOPMENT</span>
                      <span className="font-mono text-xl text-secondary font-bold">
                        10%
                      </span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-secondary rounded-full"
                        style={{ width: "10%" }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm">OPERATIONS</span>
                      <span className="font-mono text-xl text-warning font-bold">
                        10%
                      </span>
                    </div>
                    <div className="h-4 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-warning rounded-full"
                        style={{ width: "10%" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-3 gap-4 text-center text-xs text-muted-foreground">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <span>Campaigns</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-3 h-3 rounded-full bg-secondary" />
                    <span>Development</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <span>Operations</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tiers */}
          <section className="mb-16 lg:mb-24">
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm tracking-widest mb-3">
                ACCESS LEVELS
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl text-glow">
                CLEARANCE TIERS
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {/* Observer */}
              <div className="glass-card p-6 lg:p-8 animate-fade-up">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-muted/30 border border-muted/50 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl">OBSERVER</h3>
                    <p className="text-xs font-mono text-muted-foreground tracking-wider">
                      INTEL ACCESS
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    View all proposals and voting results
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    Access Observer Discord channels
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    Participate in community discussions
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                    No capital requirement
                  </li>
                </ul>
              </div>

              {/* Operator */}
              <div className="glass-card p-6 lg:p-8 border-primary/30 animate-fade-up-delay-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary icon-pulse" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-glow">OPERATOR</h3>
                    <p className="text-xs font-mono text-primary tracking-wider">
                      FULL AUTHORIZATION
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-sm text-foreground/80">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Full voting rights (1 token = 1 vote)
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Create and submit proposals
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Access exclusive Operator channels
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    Revenue participation from campaigns
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <div className="text-center mb-12">
              <p className="text-primary font-mono text-sm tracking-widest mb-3">
                OPERATIONAL INTEL
              </p>
              <h2 className="font-heading text-3xl lg:text-4xl text-glow">
                FREQUENTLY ASKED QUESTIONS
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="glass-card border-border px-6 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <AccordionTrigger className="font-heading text-left text-base hover:text-primary py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
