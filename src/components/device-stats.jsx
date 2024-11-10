/* eslint-disable react/prop-types */
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = [
  "#FF6F61",  // Light Red
  "#FF4C4C",  // Soft Red
  "#D43F00",  // Dark Red
  "#FF0000",  // Bright Red
];

export default function App({ stats }) {
  const deviceCount = stats.reduce((acc, item) => {
    if (!acc[item.device]) {
      acc[item.device] = 0;
    }
    acc[item.device]++;
    return acc;
  }, {});

  const result = Object.keys(deviceCount).map((device) => ({
    device,
    count: deviceCount[device],
  }));

  return (
    <div style={{ width: "100%", height: "auto", maxWidth: "700px", margin: "0 auto" }}>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart margin={{ top: 20, right: 30, bottom: 50, left: 30 }}>
          <Pie
            data={result}
            labelLine={false}
            label={({ device, percent }) =>
              `${device}: ${(percent * 100).toFixed(0)}%`
            }
            dataKey="count"
          >
            {result.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Device Names Below the Chart */}
      <div className="flex justify-center gap-4 mt-4">
        {result.map((entry, index) => (
          <div key={index} className="text-center">
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: COLORS[index % COLORS.length],
                display: "inline-block",
                borderRadius: "50%",
              }}
            ></div>
            <div className="mt-2 text-sm">{entry.device}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
