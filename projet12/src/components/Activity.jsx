// Activity.js
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Rectangle,
} from "recharts";
import "../styles/Home.css";
import DataFormatterActivity from "../formatage/DataFormatterActivity"; // Mettez le bon chemin d'accès

function Activity() {
  const [userSessions, setUserSessions] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12;

        const responseActivity = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        );
        const userDataActivity = await responseActivity.json();

        const sessionsData =
          DataFormatterActivity.formatSessions(userDataActivity);
        setUserSessions(sessionsData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, []);

  const data = DataFormatterActivity.formatChartData(userSessions);

  return (
    <ResponsiveContainer width="85%" height="45%">
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3" vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          stroke="#9B9EAC"
          strokeWidth={2}
          tickMargin={16}
        />
        <YAxis YAxisId="right" orientation="right" tickLine={false} />
        <Tooltip />
        <Bar
          dataKey="kilogram"
          fill="black"
          barSize={7}
          radius={[10, 10, 0, 0]}
          margin={{ top: 10, bottom: 50 }}
          activeShape={<Rectangle fill="pink" stroke="blue" />}
        />
        <Bar
          dataKey="calories"
          fill="red"
          barSize={7}
          radius={[10, 10, 0, 0]}
          activeShape={<Rectangle fill="gold" stroke="purple" />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Activity;
