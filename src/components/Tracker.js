/* global chrome */
import React, { useEffect, useState } from "react";

function Tracker() {
  const [usageData, setUsageData] = useState({});

  useEffect(() => {
    chrome.storage.local.get("today_domains", (result) => {
      if (result.today_domains) {
        setUsageData(result.today_domains);
      }
    });
  }, []);

  return (
    <div>
      <h3>⏱️ Time Usage Summary</h3>
      <ul>
        {Object.entries(usageData).map(([domain, time]) => (
          <li key={domain}><strong>{domain}</strong>: {time} sec</li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;
