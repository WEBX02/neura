import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const StatusCard = ({ icon, label, value, status }) => {
  const statusColors = {
    success: "text-success",
    warning: "text-warning",
    error: "text-primary"
  };

  return (
    <Card className="p-3 sm:p-4 bg-card border-border">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
            <div className={cn("text-muted-foreground", status && statusColors[status])}>
              {icon}
            </div>
            <p className="text-xs text-muted-foreground">{label}</p>
        </div>
        <p className={cn("text-lg sm:text-xl font-bold", status && statusColors[status])}>
            {value}
        </p>
    </div>
    </Card>
  );
};

export default StatusCard;

