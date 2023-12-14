// PerformanceKind.jsx
import React, { useEffect, useState } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import "../styles/Home.css";
import DataFormatterKind from "../formatage/DataFormatterKind"; // Mettez le bon chemin d'accès

function PerformanceKind() {
  const [performanceData, setPerformanceData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12;

        const responsePerformance = await fetch(
          `http://localhost:3000/user/${userId}/performance`
        );
        const userDataPerformance = await responsePerformance.json();

        console.log(
          "Données de l'utilisateur Performance :",
          userDataPerformance
        );

        const formattedData =
          DataFormatterKind.formatPerformanceData(userDataPerformance);

        console.log("Données de l'utilisateur Performance :", formattedData);

        setPerformanceData(formattedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, []);

  const data = performanceData || [];

  return (
    <>
      <ResponsiveContainer>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={data}
          margin={{ left: 30, top: 30, right: 30, bottom: 30 }}
          radius={[5, 5, 5, 5]}
          startAngle={30}
          endAngle={-330}
        >
          <PolarGrid stroke="white" gridType="polygon" radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#FFF"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "white", fontSize: "1.1rem", padding: "5px" }}
          />
          <PolarRadiusAxis axisLine={false} tick={false} />
          <Radar
            name="kind"
            dataKey="value"
            stroke="#FF0101B2"
            fill="#FF0101B2"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </>
  );
}

export default PerformanceKind;
