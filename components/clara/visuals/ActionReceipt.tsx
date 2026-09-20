import { CalendarCheck2 } from "lucide-react";

type ActionReceiptProps = {
  title?: string;
  detail?: string;
  className?: string;
};

export function ActionReceipt({
  title = "Booking updated",
  detail = "Friday · 11:30 AM",
  className,
}: ActionReceiptProps) {
  return (
    <div className={`action-receipt ${className ?? ""}`} role="status">
      <span className="visual-icon visual-icon--success">
        <CalendarCheck2 aria-hidden="true" size={19} />
      </span>
      <span>
        <strong>{title}</strong>
        <small>{detail}</small>
      </span>
    </div>
  );
}
