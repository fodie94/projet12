// Performance.js
import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import DataFormatterPerformance from "../formatage/DataFormatterPerformance";

function Performance() {
  const [userPerformance, setUserPerformance] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12;

        const responsePerformance = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        );
        const userDataPerformance = await responsePerformance.json();

        console.log(
          "Données de l'utilisateur Performance :",
          userDataPerformance
        );

        const performanceData =
          DataFormatterPerformance.formatPerformance(userDataPerformance);

        console.log("Données de l'utilisateur Performance :", performanceData);

        setUserPerformance(performanceData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, []);

  const data = DataFormatterPerformance.formatChartData(userPerformance);

  return (
    <ResponsiveContainer width="100%" height="60%">
      <LineChart data={data}>
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={{
            fill: "#ffffff",
            fontWeight: 500,
            fontSize: 12,
          }}
          style={{ margin: { top: 10 } }} // Ajustez la marge selon vos besoins
        />
        <Line
          dataKey="uv"
          stroke="#FFFFFF"
          strokeWidth={2}
          type="natural"
          dot={false}
          activeDot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Performance;
