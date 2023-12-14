import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import Activity from "./Activity"; // Import du composant Activity
import Analyse from "./Analyse"; // Import du composant Analyse
import Performance from "./Perfomance";
// import data from "../data/data.json";
import PerformanceKind from "./PerformanceKind";
import Score from "./Score";
function HomeTest() {
  // États pour stocker les informations de l'utilisateur
  const [userFirstName, setUserFirstName] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userId = 12;

        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const userData = await response.json();

        const { firstName } = userData.data.userInfos;

        setUserFirstName(firstName);

        console.log("Données de l'utilisateur :", userData);
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <section className="Home">
        <div className="HomeLeft">
          <div className="Logos">
            <div className="Logo1">
              <img src={icon1} alt="Logo1" />
            </div>
            <div className="Logo2">
              <img src={icon2} alt="Logo2" />
            </div>
            <div className="Logo3">
              <img src={icon3} alt="Logo3" />
            </div>
            <div className="Logo4">
              <img src={icon4} alt="Logo4" />
            </div>
          </div>
          <div className="Copyright">Copiryght, SportSee 2020</div>
        </div>
        <div className="HomeRight">
          <div className="Profil">
            <div className="ProfilName">
              <h1>Bonjour</h1>
              <p>{userFirstName}</p>
            </div>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </div>
          <div className="Analyse">
            <div className="AnalyseLeft">
              <div className="AnalyseLeftTop">
                <div className="AnalyseLeftTopText">
                  <p>Activité quotidienne</p>
                  <div className="AnalyseLeftTopTextPoidCal">
                    <div className="AnalyseLeftTopTextPoid">
                      <p>Poids (kg)</p>
                    </div>
                    <div className="AnalyseLeftTopTextCal">
                      <p>Calories brûlées (kCal)</p>
                    </div>
                  </div>
                </div>
                <Activity />
              </div>
              <div className="AnalyseLeftBottom">
                <div className="cubePerformance">
                  <Performance />
                </div>
                <div className="cubeKind">
                  {" "}
                  <PerformanceKind />
                </div>
                <div className="cubeScore">
                  <div className="Score">Score</div>
                  <Score />
                </div>
              </div>
            </div>
            <div className="AnalyseRight">
              {/* Intégration du composant Analyse */}
              <Analyse />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeTest;
