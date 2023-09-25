import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#0088FE", "#FFBB28"];

const Statistics = () => {
  const [total, setTotal] = useState(0);
  const [donationPercent, setDonationPercent] = useState(0);

  useEffect(() => {
    const DonateItems = JSON.parse(localStorage.getItem("Donates"));

    const presentDonation = DonateItems ? DonateItems.length : 0;
    console.log("Present Donation:", presentDonation);

    const totalCard = 12;

    const donationPercent = (presentDonation / totalCard).toFixed(2) * 100;
    console.log("Donation Percent:", donationPercent);
    setDonationPercent(donationPercent);

    const Total = 100 - donationPercent.toFixed(2);
    setTotal(Total.toFixed(2));
  }, []);

  const data = [
    { name: "Donation Percent", value: donationPercent },
    { name: "Remaining", value: total },
  ];

  return (
    <>
      <div style={{ width: "400px", height: "400px", margin: "auto" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Statistics;
