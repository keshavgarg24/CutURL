/* eslint-disable react/prop-types */
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Location({ stats = [] }) {
  const cityCount = stats.reduce((acc, item) => {
    if (acc[item.city]) {
      acc[item.city] += 1;
    } else {
      acc[item.city] = 1;
    }
    return acc;
  }, {});

  const cities = Object.entries(cityCount).map(([city, count]) => ({
    city,
    count,
  }));

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "700px", // Limits the width on larger screens
        margin: "0 auto", // Centers the chart
        padding: "20px",
      }}
    >
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={cities.slice(0, 5)}>
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip labelStyle={{ color: "red" }} />
          <Legend />
          {/* Updated stroke color for shades of red */}
          <Line type="monotone" dataKey="count" stroke="#D43F00" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
