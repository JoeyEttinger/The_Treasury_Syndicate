import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VoteModal from "@/components/VoteModal";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  User,
  Calendar,
  TrendingUp,
  TrendingDown,
  ExternalLink,
  Target,
  DollarSign,
  AlertTriangle,
} from "lucide-react";

// Mock data for a single proposal
const proposalData = {
  id: "001",
  title: "Fund MicroStrategy Q2 Twitter Campaign",
  status: "active" as const,
  proposer: "0x1234...5678",
  createdAt: "2024-01-15",
  description: `
## Campaign Overview

This proposal requests funding for a comprehensive Twitter marketing campaign targeting MicroStrategy's Q2 investor announcements. The campaign will focus on amplifying positive sentiment around MSTR's Bitcoin holdings and corporate strategy.

## Campaign Objectives

1. **Increase Visibility**: Generate 10M+ impressions across Bitcoin and investment communities
2. **Drive Engagement**: Target 100K+ engagements (likes, retweets, comments)
3. **Influencer Partnerships**: Collaborate with 5-10 major Bitcoin influencers
4. **Content Creation**: Produce 50+ high-quality graphics and video content

## Budget Breakdown

| Item | Cost |
|------|------|
| Influencer Partnerships | $25,000 |
| Paid Promotion | $15,000 |
| Content Creation | $7,500 |
| Analytics & Reporting | $2,500 |
| **Total** | **$50,000** |

## Timeline

- **Week 1-2**: Content creation and influencer outreach
- **Week 3-4**: Campaign launch and initial promotion
- **Week 5-8**: Sustained engagement and community management

## Success Metrics

We will track ROI through engagement metrics, follower growth, and sentiment analysis. A full report will be delivered to the DAO within 30 days of campaign completion.
  `,
  target: "MicroStrategy (MSTR)",
  fundingAmount: "$50,000",
  treasuryAllocation: "2.1%",
  yesVotes: 1234,
  noVotes: 456,
  timeRemaining: "3 days 4 hours",
  votingPower: 500,
};

const statusConfig = {
  active: { label: "ACTIVE", className: "badge-active" },
  passed: { label: "PASSED", className: "badge-passed" },
  failed: { label: "FAILED", className: "badge-failed" },
  executing: { label: "EXECUTING", className: "badge-executing" },
};

const ProposalDetail = () => {
  const { id } = useParams();
  const [voteModalOpen, setVoteModalOpen] = useState(false);
  const [voteType, setVoteType] = useState<"yes" | "no">("yes");

  const proposal = proposalData; // In real app, fetch by ID
  const totalVotes = proposal.yesVotes + proposal.noVotes;
  const yesPercentage = (proposal.yesVotes / totalVotes) * 100;
  const noPercentage = (proposal.noVotes / totalVotes) * 100;

  const handleVote = (type: "yes" | "no") => {
    setVoteType(type);
    setVoteModalOpen(true);
  };

  const handleConfirmVote = () => {
    setVoteModalOpen(false);
    // In real app, submit vote to blockchain
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 lg:pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Back Button */}
          <Link
            to="/proposals"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm tracking-wider">
              BACK TO PROPOSALS
            </span>
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div className="animate-fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-muted-foreground tracking-wider">
                    PROPOSAL #{proposal.id}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-xs font-mono tracking-wider ${
                      statusConfig[proposal.status].className
                    }`}
                  >
                    {statusConfig[proposal.status].label}
                  </span>
                </div>
                <h1 className="font-heading text-3xl lg:text-4xl text-glow mb-4">
                  {proposal.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="font-mono">{proposal.proposer}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{proposal.createdAt}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    <span>{proposal.target}</span>
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="glass-card p-6 lg:p-8 animate-fade-up-delay-1">
                <h2 className="font-heading text-xl mb-4">PROPOSAL DETAILS</h2>
                <div className="prose prose-invert prose-sm max-w-none">
                  <div className="text-foreground/80 leading-relaxed whitespace-pre-line">
                    {proposal.description}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Funding Details */}
              <div className="glass-card p-6 animate-fade-up-delay-2">
                <h3 className="font-heading text-sm tracking-wider mb-4">
                  FUNDING DETAILS
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Amount Requested
                    </span>
                    <span className="font-mono text-xl text-primary font-bold">
                      {proposal.fundingAmount}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Treasury Allocation
                    </span>
                    <span className="font-mono text-sm">
                      {proposal.treasuryAllocation}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground text-sm">
                      Campaign Target
                    </span>
                    <span className="text-sm">{proposal.target}</span>
                  </div>
                </div>
              </div>

              {/* Vote Status */}
              <div className="glass-card p-6 animate-fade-up-delay-3">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading text-sm tracking-wider">
                    CURRENT VOTES
                  </h3>
                  {proposal.status === "active" && (
                    <div className="flex items-center gap-2 text-warning text-xs">
                      <Clock className="w-3 h-3" />
                      <span className="font-mono">{proposal.timeRemaining}</span>
                    </div>
                  )}
                </div>

                {/* Vote Counts */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 rounded-lg bg-success/10 border border-success/30">
                    <TrendingUp className="w-5 h-5 text-success mx-auto mb-2" />
                    <p className="font-mono text-2xl text-success font-bold">
                      {proposal.yesVotes.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      YES ({yesPercentage.toFixed(1)}%)
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                    <TrendingDown className="w-5 h-5 text-destructive mx-auto mb-2" />
                    <p className="font-mono text-2xl text-destructive font-bold">
                      {proposal.noVotes.toLocaleString()}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      NO ({noPercentage.toFixed(1)}%)
                    </p>
                  </div>
                </div>

                {/* Vote Bars */}
                <div className="space-y-2 mb-6">
                  <div className="h-3 bg-muted rounded-full overflow-hidden flex">
                    <div
                      className="progress-yes"
                      style={{ width: `${yesPercentage}%` }}
                    />
                    <div
                      className="progress-no"
                      style={{ width: `${noPercentage}%` }}
                    />
                  </div>
                </div>

                {/* Voting Power Display */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-card-elevated mb-4">
                  <span className="text-sm text-muted-foreground">
                    Your Voting Power
                  </span>
                  <span className="font-mono text-primary font-bold">
                    {proposal.votingPower.toLocaleString()} votes
                  </span>
                </div>

                {/* Vote Buttons */}
                {proposal.status === "active" && (
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => handleVote("yes")}
                      className="bg-success hover:bg-success/90 text-success-foreground font-heading tracking-wider btn-glow-green"
                    >
                      VOTE YES
                    </Button>
                    <Button
                      onClick={() => handleVote("no")}
                      className="bg-destructive hover:bg-destructive/90 text-destructive-foreground font-heading tracking-wider"
                    >
                      VOTE NO
                    </Button>
                  </div>
                )}

                {proposal.status !== "active" && (
                  <div className="flex items-center gap-2 justify-center text-muted-foreground text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-mono">VOTING CLOSED</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="glass-card p-6 animate-fade-up-delay-3">
                <h3 className="font-heading text-sm tracking-wider mb-4">
                  ACTIONS
                </h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    VIEW ON CHAIN
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary"
                  >
                    SHARE PROPOSAL
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Vote Modal */}
      <VoteModal
        isOpen={voteModalOpen}
        onClose={() => setVoteModalOpen(false)}
        voteType={voteType}
        votingPower={proposal.votingPower}
        onConfirm={handleConfirmVote}
      />
    </div>
  );
};

export default ProposalDetail;
