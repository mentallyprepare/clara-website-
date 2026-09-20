import { ScanText } from "lucide-react";

type EvidenceLinkProps = {
  checkpoint?: string;
  state?: string;
  className?: string;
};

export function EvidenceLink({
  checkpoint = "Correct next step explained",
  state = "Met",
  className,
}: EvidenceLinkProps) {
  return (
    <div className={`evidence-link ${className ?? ""}`}>
      <span className="visual-icon">
        <ScanText aria-hidden="true" size={19} />
      </span>
      <span>
        <small>Evidence found in transcript</small>
        <strong>{checkpoint}</strong>
      </span>
      <span className="evidence-link__state">{state}</span>
    </div>
  );
}
