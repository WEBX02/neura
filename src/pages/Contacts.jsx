import { useState } from "react";
import Layout from "../components/Layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Star, UserPlus, Send } from "lucide-react";
import { toast } from "sonner";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      id: "1",
      name: "John Doe",
      phone: "+1 (555) 123-4567",
      priority: "Primary",
    },
    {
      id: "2",
      name: "Jane Smith",
      phone: "+1 (555) 987-6543",
      priority: "Secondary",
    },
  ]);

  const handleTestAlert = (contact) => {
    toast.success("Test Alert Sent!", {
      description: `Alert sent to ${contact.name}`,
    });
  };

  const handleAddContact = () => {
    toast.info("Add Contact", {
      description: "Contact management feature coming soon!",
    });
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold mb-2">Emergency Contacts</h1>
          <p className="text-sm text-muted-foreground">
            Manage up to 5 trusted contacts
          </p>
        </div>

        {/* Add Contact Button */}
        <Button
          onClick={handleAddContact}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <UserPlus className="w-4 h-4 mr-2" />
          Add Emergency Contact
        </Button>

        {/* Contacts List */}
        <div className="space-y-4">
          {contacts.map((contact, index) => (
            <Card
              key={contact.id}
              className="p-4 bg-card border-border slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-lg font-bold flex-shrink-0">
                    {contact.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold truncate">{contact.name}</h3>
                      {contact.priority === "Primary" && (
                        <Star className="w-4 h-4 text-warning fill-warning flex-shrink-0" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Phone className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{contact.phone}</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-foreground">
                      {contact.priority}
                    </span>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => handleTestAlert(contact)}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Send className="w-3 h-3 mr-2" />
                Test Alert
              </Button>
            </Card>
          ))}
        </div>

        {/* Info Card */}
        <Card className="p-4 bg-secondary/50 border-border">
          <p className="text-xs text-muted-foreground">
            💡 Primary contacts are alerted first. Secondary contacts are notified if primary contacts don't respond.
          </p>
        </Card>
      </div>
    </Layout>
  );
};

export default Contacts;

