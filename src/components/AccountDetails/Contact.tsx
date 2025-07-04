import { Mail, PhoneCall, MessageCircle, CalendarDays } from "lucide-react";

export function Contact() {
  const actions = [
    { label: "Email", icon: Mail },
    { label: "Call", icon: PhoneCall },
    { label: "Message", icon: MessageCircle },
    { label: "Calendar", icon: CalendarDays },
  ];

  return (
    <div className="flex w-full max-w-96 items-center justify-between rounded-2xl border border-border bg-b-light-background px-6 py-4 shadow-sm">
      {actions.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center text-center text-foreground gap-1 w-1/4"
        >
          <Icon className="h-5 w-5 text-foreground" />
          <span className="text-sm">{label}</span>
        </div>
      ))}
    </div>
  );
}
