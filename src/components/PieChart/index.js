import React from 'react';
import { PieChart, Pie, Tooltip, Text } from 'recharts';

import './pieChart.css';

export default ({ data }) => {
    return (
        <PieChart  width={200} height={200} className="pie-chart-container" >
            <Pie dataKey="value" data={data} isAnimationActive innerRadius={40} outerRadius={80} fill="#343a40" />
            <Tooltip/>
        </PieChart>
    )
}