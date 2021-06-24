import { PieChart, Pie, Tooltip, Cell } from "recharts";

import "./pieChart.css";

const COLORS = ["#343a40", "#007bff"];
export default ({ data }) => {
  return (
    <PieChart width={200} height={200} className="pie-chart-container">
      <Pie
        dataKey="value"
        data={data}
        isAnimationActive
        innerRadius={40}
        outerRadius={80}
        fill="#343a40"
      >
        {data.map((entry, index) => (
          <Cell key={entry} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
