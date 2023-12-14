// Analyse.jsx

import React, { useEffect, useState } from "react";
import "../styles/Home.css";

import cal from "../assets/calories-icon.png";
import carbs from "../assets/carbs-icon.png";
import fat from "../assets/fat-icon.png";
import prot from "../assets/protein-icon.png";

function Analyse() {
  // États pour stocker les informations de l'utilisateur

  const [caloriesCount, setCaloriesCount] = useState("");
  const [proteinCount, setProteinCount] = useState("");
  const [carbohydrateCount, setCarbohydrateCount] = useState("");
  const [lipidCount, setLipidCount] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12;

        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const userData = await response.json();

        const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
          userData.data.keyData;

        setCaloriesCount(calorieCount);
        setProteinCount(proteinCount);
        setCarbohydrateCount(carbohydrateCount);
        setLipidCount(lipidCount);

        console.log("Données de l'utilisateur :", userData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <div className="card">
        {" "}
        <img src={cal} alt="Calories" />
        <div className="cardstyle">
          <div className="cardstyle1">
            <p>{caloriesCount}kCal</p>
          </div>
          <div className="cardstyle2">
            <p>Calories</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={prot} alt="Proteines" />
        <div className="cardstyle">
          <div className="cardstyle1">
            <p>{proteinCount}g</p>
          </div>
          <div className="cardstyle2">
            <p>Proteines</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={carbs} alt="Glucides" />
        <div className="cardstyle">
          <div className="cardstyle1">
            <p>{carbohydrateCount}g</p>
          </div>
          <div className="cardstyle2">
            <p>Glucides</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={fat} alt="Lipides" />
        <div className="cardstyle">
          <div className="cardstyle1">
            <p>{lipidCount}g</p>
          </div>
          <div className="cardstyle2">
            <p>Lipides</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analyse;
