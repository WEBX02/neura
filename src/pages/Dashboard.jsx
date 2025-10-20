import { useState } from "react";
import Layout from "../components/Layout";
import SOSButton from "../components/SOSButton";
import StatusCard from "../components/StatusCard";
import { MapPin, Bluetooth, Battery, Timer } from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const [sosActive, setSosActive] = useState(false);

  const handleSOSPress = () => {
    setSosActive(true);
    toast.error("🚨 SOS Alert Sent!", {
      description: "Emergency contacts have been notified with your location.",
    });
    
    setTimeout(() => {
      setSosActive(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header - Logo removed and font changed */}
        <div className="flex items-center justify-start">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold tracking-widest text-foreground">NEURA</h1>
        </div>

        {/* SOS Button */}
        <div className="flex justify-center">
          <SOSButton onPress={handleSOSPress} isActive={sosActive} />
        </div>

        {/* Location */}
        <div className="space-y-4 slide-up">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">Current Location</span>
          </div>
          <p className="text-sm font-medium">
            37.7749° N, 122.4194° W
          </p>
          
          {/* Mock Map */}
          <div className="w-full h-32 sm:h-40 bg-secondary rounded-lg border border-border relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-2 right-2 text-xs text-muted-foreground bg-background/80 px-2 py-1 rounded">
              San Francisco, CA
            </div>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-2 gap-4 slide-up">
          <StatusCard
            icon={<Bluetooth className="w-5 h-5" />}
            label="Band Status"
            value="Connected"
            status="success"
          />
          <StatusCard
            icon={<Battery className="w-5 h-5" />}
            label="Battery"
            value="87%"
            status="success"
          />
          <StatusCard
            icon={<Timer className="w-5 h-5" />}
            label="Auto Alert"
            value="30 sec"
          />
          <StatusCard
            icon={<MapPin className="w-5 h-5" />}
            label="GPS Signal"
            value="Strong"
            status="success"
          />
        </div>

        {/* Quick Actions */}
        <div className="slide-up">
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
            QUICK ACTIONS
          </h3>
          <button
            onClick={handleSOSPress}
            className="w-full p-4 bg-card border border-border rounded-lg text-left hover:bg-secondary transition-colors"
          >
            <p className="font-semibold mb-1">Manual SOS Trigger</p>
            <p className="text-xs text-muted-foreground">
              Send immediate alert to emergency contacts
            </p>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;

