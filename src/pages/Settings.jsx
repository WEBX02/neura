import Layout from "../components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Bluetooth, 
  Wifi, 
  Activity, 
  Brain, 
  RefreshCw, 
  Download,
  ChevronRight 
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Settings = () => {
  const [aiMode, setAiMode] = useState(true);
  const [sensitivity, setSensitivity] = useState("medium");

  const handleReconnect = () => {
    toast.success("Reconnecting to band...", {
      description: "This may take a few seconds",
    });
  };

  const handleFirmwareUpdate = () => {
    toast.info("Checking for updates...", {
      description: "Your band is up to date",
    });
  };

  const handleSensitivityChange = (level) => {
    setSensitivity(level);
    toast.success(`Fall detection sensitivity set to ${level}`);
  };

  return (
    <Layout>
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Settings</h1>
          <p className="text-sm text-muted-foreground">
            Configure your NEURA band
          </p>
        </div>

      <div className="space-y-8">
        {/* Band Connection */}
        <section>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
            BAND CONNECTION
          </h3>
          <div className="space-y-3">
            <Card className="p-4 bg-card border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bluetooth className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-semibold">Bluetooth</p>
                    <p className="text-xs text-muted-foreground">Connected</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-success rounded-full" />
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-success" />
                  <div>
                    <p className="font-semibold">Wi-Fi</p>
                    <p className="text-xs text-muted-foreground">Connected</p>
                  </div>
                </div>
                <div className="w-2 h-2 bg-success rounded-full" />
              </div>
            </Card>

            <Button
              onClick={handleReconnect}
              variant="outline"
              className="w-full"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Reconnect Band
            </Button>
          </div>
        </section>

        {/* Fall Detection */}
        <section>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
            FALL DETECTION
          </h3>
          <div className="space-y-3">
            <Card className="p-4 bg-card border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Activity className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">Sensitivity</p>
                    <p className="text-xs text-muted-foreground">Adjust detection level</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {["low", "medium", "high"].map((level) => (
                  <button
                    key={level}
                    onClick={() => handleSensitivityChange(level)}
                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                      sensitivity === level
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-card border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5" />
                  <div>
                    <p className="font-semibold">AI Mode</p>
                    <p className="text-xs text-muted-foreground">
                      Smart fall detection
                    </p>
                  </div>
                </div>
                <Switch checked={aiMode} onCheckedChange={setAiMode} />
              </div>
            </Card>
          </div>
        </section>

        {/* System */}
        <section>
          <h3 className="text-sm font-semibold mb-3 text-muted-foreground">
            SYSTEM
          </h3>

          <Card className="p-4 bg-card border-border">
            <button
              onClick={handleFirmwareUpdate}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-3">
                <Download className="w-5 h-5" />
                <div className="text-left">
                  <p className="font-semibold">Firmware Update</p>
                  <p className="text-xs text-muted-foreground">Version 2.1.0</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </button>
          </Card>
        </section>
      </div>

      {/* About */}
      <Card className="mt-8 p-4 bg-secondary/50 border-border">
        <p className="text-xs text-muted-foreground text-center">
          NEURA v1.0.0 • Made with care for your safety
        </p>
      </Card>
    </Layout>
  );
};

export default Settings;

