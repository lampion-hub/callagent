import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    id: "ai-human",
    title: "Never Miss a Call",
    content: "AI call agents answer every inbound call instantly, 24/7—capturing leads, booking appointments, and handling common questions without hold times.",
    cta: "See it in action",
  },
  {
    id: "cross-org",
    title: "Consistent, On-Brand Voice",
    content: "Every call follows your scripts, policies, and tone, ensuring a professional and consistent customer experience every time.",
    cta: "More information",
  },
  {
    id: "diagrams",
    title: "Actionable Call Insights",
    content: "Gain visibility into call volume, outcomes, customer intent, and missed opportunities with real-time analytics and call summaries.",
    cta: "See it in action",
  },
  {
    id: "visibility",
    title: "Scale Support Without Adding Staff",
    content: "Handle call spikes and business growth effortlessly. AI agents scale up or down automatically with no hiring, training, or scheduling required.",
    cta: "See it in action",
  },
];

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("ai-human");

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-foreground text-center mb-12">
          Connecting people, systems, and AI
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-muted"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {activeContent?.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
