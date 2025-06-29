import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

/* global chrome */
function Graph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    chrome.storage.local.get("today_domains", (result) => {
      if (result.today_domains) {
        const formatted = Object.entries(result.today_domains).map(([domain, time]) => ({
          name: domain,
          value: time,
        }));
        setData(formatted);
      }
    });
  }, []);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8854d0"];

  return (
    <div>
      <h3>📊 Website Usage</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default Graph;
