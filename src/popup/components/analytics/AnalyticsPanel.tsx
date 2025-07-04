import React from "react";
import PresenceAnalytics from "./PresenceAnalytics";

const AnalyticsPanel: React.FC = () => (
  <div className="p-4 bg-gray-50 rounded-lg shadow-inner min-h-[200px] text-center">
    <PresenceAnalytics />
  </div>
);

export default AnalyticsPanel;