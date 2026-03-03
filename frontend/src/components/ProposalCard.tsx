import { Link } from "react-router-dom";
import { Clock, TrendingUp, TrendingDown } from "lucide-react";

export type ProposalStatus = "active" | "passed" | "failed" | "executing";

export interface ProposalCardProps {
  id: string;
  title: string;
  target: string;
  fundingAmount: string;
  currency: "USD" | "BTC";
  status: ProposalStatus;
  yesVotes: number;
  noVotes: number;
  timeRemaining?: string;
}

const statusConfig = {
  active: {
    label: "ACTIVE",
    className: "badge-active",
  },
  passed: {
    label: "PASSED",
    className: "badge-passed",
  },
  failed: {
    label: "FAILED",
    className: "badge-failed",
  },
  executing: {
    label: "EXECUTING",
    className: "badge-executing",
  },
};

const ProposalCard = ({
  id,
  title,
  target,
  fundingAmount,
  currency,
  status,
  yesVotes,
  noVotes,
  timeRemaining,
}: ProposalCardProps) => {
  const totalVotes = yesVotes + noVotes;
  const yesPercentage = totalVotes > 0 ? (yesVotes / totalVotes) * 100 : 0;
  const noPercentage = totalVotes > 0 ? (noVotes / totalVotes) * 100 : 0;
  const statusInfo = statusConfig[status];

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <Link to={`/proposals/${id}`} className="block">
      <article className="glass-card-hover p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">
            PROPOSAL #{id}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-mono tracking-wider ${statusInfo.className}`}
          >
            {statusInfo.label}
          </span>
        </div>

        {/* Title & Target */}
        <h3 className="font-heading text-lg mb-2 text-foreground line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{target}</p>

        {/* Funding Amount */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground font-mono tracking-wider mb-1">
            FUNDING REQUEST
          </p>
          <p className="font-mono text-2xl text-primary font-bold">
            {currency === "USD" ? "$" : "₿"}
            {fundingAmount}
          </p>
        </div>

        {/* Vote Progress */}
        <div className="space-y-3 flex-grow">
          {/* YES Bar */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="flex items-center gap-1 text-success">
                <TrendingUp className="w-3 h-3" />
                YES
              </span>
              <span className="font-mono text-success">
                {formatNumber(yesVotes)} ({yesPercentage.toFixed(1)}%)
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full progress-yes rounded-full transition-all duration-500"
                style={{ width: `${yesPercentage}%` }}
              />
            </div>
          </div>

          {/* NO Bar */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="flex items-center gap-1 text-destructive">
                <TrendingDown className="w-3 h-3" />
                NO
              </span>
              <span className="font-mono text-destructive">
                {formatNumber(noVotes)} ({noPercentage.toFixed(1)}%)
              </span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full progress-no rounded-full transition-all duration-500"
                style={{ width: `${noPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        {timeRemaining && status === "active" && (
          <div className="mt-4 pt-4 border-t border-border flex items-center gap-2 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="text-xs font-mono tracking-wider">
              ENDS IN {timeRemaining}
            </span>
          </div>
        )}
      </article>
    </Link>
  );
};

export default ProposalCard;
