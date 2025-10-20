import { useState } from "react";
import Layout from "../components/Layout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const History = () => {
  const [alerts] = useState([
    {
      id: "1",
      date: "Today",
      time: "14:32",
      location: "37.7749° N, 122.4194° W",
      status: "resolved",
      type: "sos",
    },
    {
      id: "2",
      date: "Yesterday",
      time: "09:15",
      location: "37.7850° N, 122.4100° W",
      status: "false-alarm",
      type: "fall",
    },
    {
      id: "3",
      date: "2 days ago",
      time: "18:45",
      location: "37.7650° N, 122.4300° W",
      status: "resolved",
      type: "fall",
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "resolved":
        return <CheckCircle className="w-4 h-4 text-success" />;
      case "pending":
        return <Clock className="w-4 h-4 text-warning" />;
      case "false-alarm":
        return <XCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusLabel = (status) => {
    switch (status) {
      case "resolved":
        return "Resolved";
      case "pending":
        return "Pending";
      case "false-alarm":
        return "False Alarm";
    }
  };

  const getTypeColor = (type) => {
    return type === "sos" ? "bg-primary" : "bg-warning";
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Alert History</h1>
          <p className="text-sm text-muted-foreground">
            Timeline of all emergency alerts
          </p>
        </div>

        {/* Alerts Timeline */}
        <div className="space-y-4">
          {alerts.map((alert, index) => (
            <Card
              key={alert.id}
              className="p-4 bg-card border-border slide-up cursor-pointer hover:bg-secondary/50 transition-colors relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Type Indicator */}
                <div className={`w-1 h-full ${getTypeColor(alert.type)} rounded-full absolute left-0 top-0 bottom-0`} />
                
                {/* Alert Icon */}
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 ml-2">
                  <AlertTriangle className="w-5 h-5 text-primary" />
                </div>

                {/* Alert Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center justify-between mb-2 gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {alert.type.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1">
                        {getStatusIcon(alert.status)}
                        <span className="text-xs text-muted-foreground">
                          {getStatusLabel(alert.status)}
                        </span>
                      </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    <span>
                      {alert.date} at {alert.time}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">
                      {alert.location}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State (when no alerts) */}
        {alerts.length === 0 && (
          <Card className="p-8 text-center bg-card border-border mt-4">
            <AlertTriangle className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              No alerts recorded yet
            </p>
          </Card>
        )}
      </div>
    </Layout>
  );
};

export default History;

