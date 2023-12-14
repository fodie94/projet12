// Score.js
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import "../styles/Home.css";
import DataFormatterScore from "../formatage/DataFormatterScore"; // Mettez le bon chemin d'accès

function Score() {
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12;

        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const userData = await response.json();

        const formattedScoreData = DataFormatterScore.formatScore(userData);
        setScoreData(formattedScoreData);

        console.log("Données de l'utilisateur :", userData);
        console.log("Données du score :", formattedScoreData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, []);

  const COLORS = ["#FF0000", "#FFFFFF"]; // Rouge pour le score, Blanc pour la portion restante

  return (
    <PieChart width={260} height={260}>
      <Pie
        data={scoreData}
        cx={130}
        cy={130}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {scoreData &&
          Array.isArray(scoreData) &&
          scoreData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
      </Pie>
      <text
        className="scoreText"
        x={130}
        y={130}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={16}
      >
        {scoreData.length > 0 && `${scoreData[0].value}% de votre objectif`}
      </text>
    </PieChart>
  );
}

export default Score;
