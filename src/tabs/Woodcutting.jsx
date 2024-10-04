import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import ToggleButtons from "../components/ToggleButtons";
import Boosts from "../components/Boosts";
import Footer from "../components/Footer";

import gatheringData from "../data/gathering_data.json";

const Woodcutting = () => {
  // Person's current level
  const [currentLevel, setCurrentLevel] = useState(1);
  const updateCurrentLevel = (currentLevel) => {
    setCurrentLevel(currentLevel);
  };
  // Person's current level percentage
  const [currentPercentage, setCurrentPercentage] = useState(0);
  const updateCurrentPercentage = (currentPercentage) => {
    currentPercentage = currentPercentage / 100;
    setCurrentPercentage(currentPercentage);
  };
  // Person's target level
  const [targetLevel, setTargetLevel] = useState(1);
  const updateTargetLevel = (targetLevel) => {
    setTargetLevel(targetLevel);
  };
  // Person's target element
  const [element, setElement] = useState(['loading']);
  const updateElement = (element) => {
    setElement(element);
  };

  // Exp boosts
  const [boostsDidUpdate, setBoostDidUpdate] = useState(false);
  const [boosts, setBoosts] = useState([]);
  const updateBoosts = (boosts, updatedBoostName) => {
    setBoosts(boosts);
    setBoostDidUpdate(!boostsDidUpdate);
  };

  return (
    <>
      <Attribute

        maxValue={120}
        attributeName={"Your Woodcutting Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute

        maxValue={120}
        attributeName={"Target Woodcutting Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <ToggleButtons
        updateElement={updateElement}
        skillsData={gatheringData}
        skill="Woodcutting"
        currentLevel={currentLevel}
      />
      <Boosts boosts={boosts} updateBoosts={updateBoosts} />

      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        boosts={boosts}
        boostsDidUpdate={boostsDidUpdate}
        skill="Woodcutting"
      />
      <Footer />
    </>
  );
};

export default Woodcutting;
