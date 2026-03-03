import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProposalCard, { ProposalCardProps } from "@/components/ProposalCard";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowUpDown } from "lucide-react";

// Mock data for proposals
const mockProposals: ProposalCardProps[] = [
  {
    id: "001",
    title: "Fund MicroStrategy Q2 Twitter Campaign",
    target: "MicroStrategy (MSTR)",
    fundingAmount: "50,000",
    currency: "USD",
    status: "active",
    yesVotes: 1234,
    noVotes: 456,
    timeRemaining: "3 days",
  },
  {
    id: "002",
    title: "Marathon Digital Billboard Ads - Times Square",
    target: "Marathon Digital Holdings",
    fundingAmount: "125,000",
    currency: "USD",
    status: "active",
    yesVotes: 2890,
    noVotes: 312,
    timeRemaining: "5 days",
  },
  {
    id: "003",
    title: "Podcast Sponsorship - Bitcoin Treasury Series",
    target: "Multiple Treasury Companies",
    fundingAmount: "0.5",
    currency: "BTC",
    status: "executing",
    yesVotes: 4521,
    noVotes: 890,
  },
  {
    id: "004",
    title: "Metaplanet Japan Media Blitz",
    target: "Metaplanet Inc.",
    fundingAmount: "75,000",
    currency: "USD",
    status: "passed",
    yesVotes: 3456,
    noVotes: 234,
  },
  {
    id: "005",
    title: "Block Inc. YouTube Documentary",
    target: "Block Inc.",
    fundingAmount: "200,000",
    currency: "USD",
    status: "failed",
    yesVotes: 1200,
    noVotes: 3400,
  },
  {
    id: "006",
    title: "Semler Scientific Investor Relations Campaign",
    target: "Semler Scientific",
    fundingAmount: "35,000",
    currency: "USD",
    status: "active",
    yesVotes: 890,
    noVotes: 234,
    timeRemaining: "12 hours",
  },
];

type FilterStatus = "all" | "active" | "completed" | "failed";

const Proposals = () => {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filterOptions: { label: string; value: FilterStatus }[] = [
    { label: "ALL", value: "all" },
    { label: "ACTIVE", value: "active" },
    { label: "COMPLETED", value: "completed" },
    { label: "FAILED", value: "failed" },
  ];

  const filteredProposals = mockProposals.filter((proposal) => {
    const matchesSearch =
      proposal.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proposal.target.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    switch (activeFilter) {
      case "active":
        return proposal.status === "active";
      case "completed":
        return proposal.status === "passed" || proposal.status === "executing";
      case "failed":
        return proposal.status === "failed";
      default:
        return true;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="mb-10 lg:mb-16">
            <p className="text-primary font-mono text-sm tracking-widest mb-3 animate-fade-up">
              ACTIVE OPERATIONS
            </p>
            <h1 className="font-heading text-4xl lg:text-5xl text-glow animate-fade-up-delay-1">
              PROPOSALS
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl animate-fade-up-delay-2">
              Review and vote on marketing campaigns for Bitcoin treasury companies.
              Every operator has a voice.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <Button
                  key={option.value}
                  variant="outline"
                  size="sm"
                  onClick={() => setActiveFilter(option.value)}
                  className={`font-mono text-xs tracking-wider ${
                    activeFilter === option.value
                      ? "border-primary text-primary bg-primary/10"
                      : "border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary"
                  }`}
                >
                  {option.label}
                </Button>
              ))}
            </div>

            {/* Search & Sort */}
            <div className="flex gap-2 lg:ml-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search proposals..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-sm bg-card border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary"
              >
                <ArrowUpDown className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline font-mono text-xs">SORT</span>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-muted-foreground/30 text-muted-foreground hover:border-primary/50 hover:text-primary"
              >
                <Filter className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline font-mono text-xs">FILTER</span>
              </Button>
            </div>
          </div>

          {/* Proposals Grid */}
          {filteredProposals.length > 0 ? (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProposals.map((proposal, index) => (
                <div
                  key={proposal.id}
                  className="animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProposalCard {...proposal} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground font-mono tracking-wider">
                NO PROPOSALS FOUND
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Proposals;
