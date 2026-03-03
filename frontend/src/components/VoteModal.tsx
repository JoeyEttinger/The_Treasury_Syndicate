import { useState } from "react";
import { X, AlertTriangle, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  voteType: "yes" | "no";
  votingPower: number;
  onConfirm: () => void;
}

const VoteModal = ({
  isOpen,
  onClose,
  voteType,
  votingPower,
  onConfirm,
}: VoteModalProps) => {
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setIsConfirming(true);
    // Simulate confirmation delay
    setTimeout(() => {
      setIsConfirming(false);
      setIsSuccess(true);
      setTimeout(() => {
        onConfirm();
        setIsSuccess(false);
      }, 1500);
    }, 1000);
  };

  const isYes = voteType === "yes";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative glass-card border-border p-6 lg:p-8 max-w-md w-full animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          // Success State
          <div className="text-center py-8">
            <div
              className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                isYes ? "bg-success/20" : "bg-destructive/20"
              }`}
            >
              <Check
                className={`w-8 h-8 ${isYes ? "text-success" : "text-destructive"}`}
              />
            </div>
            <h3 className="font-heading text-2xl mb-2">VOTE CONFIRMED</h3>
            <p className="text-muted-foreground">
              Your vote has been recorded successfully.
            </p>
          </div>
        ) : (
          // Confirmation State
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div
                className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isYes ? "bg-success/20" : "bg-destructive/20"
                }`}
              >
                <AlertTriangle
                  className={`w-8 h-8 ${isYes ? "text-success" : "text-destructive"}`}
                />
              </div>
              <h3 className="font-heading text-2xl mb-2">CONFIRM YOUR VOTE</h3>
            </div>

            {/* Vote Details */}
            <div className="glass-card bg-card-elevated p-4 rounded-lg mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-muted-foreground text-sm">Your Choice</span>
                <span
                  className={`font-heading text-lg ${
                    isYes ? "text-success" : "text-destructive"
                  }`}
                >
                  {isYes ? "YES" : "NO"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-sm">Voting Power</span>
                <span className="font-mono text-lg text-primary">
                  {votingPower.toLocaleString()} votes
                </span>
              </div>
            </div>

            {/* Warning */}
            <div className="flex items-start gap-3 mb-6 p-3 rounded-lg bg-warning/10 border border-warning/30">
              <AlertTriangle className="w-5 h-5 text-warning shrink-0 mt-0.5" />
              <p className="text-sm text-warning">
                This action cannot be undone. Your tokens will be locked until the
                voting period ends.
              </p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 border-muted-foreground/50 hover:border-foreground"
                onClick={onClose}
                disabled={isConfirming}
              >
                CANCEL
              </Button>
              <Button
                className={`flex-1 font-heading tracking-wider ${
                  isYes
                    ? "bg-success hover:bg-success/90 text-success-foreground btn-glow-green"
                    : "bg-destructive hover:bg-destructive/90 text-destructive-foreground"
                }`}
                onClick={handleConfirm}
                disabled={isConfirming}
              >
                {isConfirming ? "CONFIRMING..." : "CONFIRM VOTE"}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VoteModal;
