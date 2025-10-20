import Layout from "../components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";
import { toast } from "sonner";

const LiveTracking = () => {
  const handleGetDirections = () => {
    toast.info("Opening directions...", {
      description: "Launching map navigation",
    });
  };

  const handleCallContact = () => {
    toast.info("Calling emergency contact...");
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            Live Tracking
          </h1>
          <p className="text-sm text-muted-foreground">
            Real-time location monitoring
          </p>
        </div>

        {/* Alert Info */}
        <Card className="p-4 bg-primary/10 border-primary/20">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm mb-1">Emergency Alert Active</p>
              <p className="text-xs text-muted-foreground">
                John Doe • Started 2 minutes ago
              </p>
            </div>
          </div>
        </Card>

        {/* Map View */}
        <div className="w-full aspect-[4/3] sm:aspect-video bg-secondary rounded-lg border border-border relative overflow-hidden">
          {/* Mock map with animated pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="w-4 h-4 bg-primary rounded-full animate-pulse" />
              <div className="absolute inset-0 w-4 h-4 bg-primary rounded-full animate-ping" />
            </div>
          </div>
          
          {/* Location label */}
          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-primary" />
              <div>
                <p className="font-semibold">Current Location</p>
                <p className="text-xs text-muted-foreground">37.7749° N, 122.4194° W</p>
              </div>
            </div>
          </div>

          {/* Time label */}
          <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="w-4 h-4" />
              <span className="font-semibold">14:32</span>
            </div>
          </div>

          {/* Distance */}
          <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-border">
            <p className="text-sm text-center">
              <span className="font-semibold">2.4 km</span>
              <span className="text-muted-foreground"> away from you</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button
            onClick={handleGetDirections}
            className="w-full bg-primary hover:bg-primary/90 h-12 text-base"
          >
            <Navigation className="w-4 h-4 mr-2" />
            Get Directions
          </Button>

          <Button
            onClick={handleCallContact}
            variant="outline"
            className="w-full h-12 text-base"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Emergency Contact
          </Button>
        </div>

        {/* Status Updates */}
        <Card className="p-4 bg-card border-border">
          <h3 className="font-semibold mb-4 text-sm">Activity Log</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm">Alert sent to 5 contacts</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm">Location tracking started</p>
                <p className="text-xs text-muted-foreground">2 minutes ago</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-1.5 h-1.5 bg-warning rounded-full mt-2 flex-shrink-0" />
              <div>
                <p className="text-sm">Fall detected</p>
                <p className="text-xs text-muted-foreground">3 minutes ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default LiveTracking;

