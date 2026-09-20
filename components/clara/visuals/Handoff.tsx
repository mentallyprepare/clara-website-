import { UserRoundCheck } from "lucide-react";

type HandoffProps = {
  label?: string;
  detail?: string;
  className?: string;
};

export function Handoff({
  label = "Passed to Priya with context",
  detail = "Customer asked for an exception",
  className,
}: HandoffProps) {
  return (
    <div className={`handoff ${className ?? ""}`}>
      <span className="visual-icon">
        <UserRoundCheck aria-hidden="true" size={19} />
      </span>
      <span>
        <strong>{label}</strong>
        <small>{detail}</small>
      </span>
    </div>
  );
}
