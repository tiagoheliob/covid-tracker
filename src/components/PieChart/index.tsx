import { PieChart, Pie, Cell } from "recharts";

import "./pieChart.css";

const COLORS = ["#343a40", "#007bff"];
export default ({ data, width, height }) => {
  return (
    <PieChart width={width} height={height} className="pie-chart-container">
      <Pie
        dataKey="value"
        data={data}
        isAnimationActive
        innerRadius={30}
        outerRadius={50}
        fill="#343a40"
      >
        {data.map((entry, index) => (
          <Cell key={entry} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};
