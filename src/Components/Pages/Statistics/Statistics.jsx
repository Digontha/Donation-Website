import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Legend, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#FFBB28"];

const Statistics = () => {
  const [total, setTotal] = useState(0);
  const [donationPercent, setDonationPercent] = useState(0);

  useEffect(() => {
    const DonateItems = JSON.parse(localStorage.getItem("Donates")) || [];

    const presentDonation = DonateItems.length;
    console.log("Present Donation:", presentDonation);

    const totalCard = 12;

    const donationPercent = ((presentDonation / totalCard) * 100).toFixed(2);
    console.log("Donation Percent:", donationPercent);
    setDonationPercent(donationPercent);

    const Total = (100 - donationPercent).toFixed(2);
    setTotal(Total);
  }, []);

  const data = [
    { name: "Donation Percent", value: parseFloat(donationPercent) },
    { name: "Remaining", value: parseFloat(total) },
  ];

  return (
    <>
      <div style={{ width: "600px", height: "500px", margin: "auto" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={200}
              fill="#8884d8"
              label={({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
                const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
                const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
                return (
                  <text x={x} y={y} fill="black" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central" fontWeight="bold">
                    {`${data[index].name}: ${value.toFixed(2)}%`}
                  </text>
                );
              }}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
