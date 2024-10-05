import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import ToggleButtons from "../components/ToggleButtons";
import CustomSwitch from "../components/CustomSwitch";

import artisanData from "../data/artisan_data.json";

const Smithing = () => {
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
  const [element, setElement] = useState(["loading"]);
  const updateElement = (element) => {
    setElement(element);
  };

  // Smelt or buy bars control
  const [smeltBars, setSmeltBars] = useState(true);
  const updateSmeltBars = (smeltBars) => {
    setSmeltBars(smeltBars);
  };

  const data = artisanData["Smithing"];

  return (
    <>
      <Attribute
        maxValue={120}
        attributeName={"Your Smithing Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={120}
        attributeName={"Target Smithing Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <ToggleButtons data={data} skill="Smithing" currentLevel={currentLevel} updateElement={updateElement} />
      <CustomSwitch value={smeltBars} updateValue={updateSmeltBars} element={element} trueText="Smelt Bars" falseText="Buy Bars" />
      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Smithing"
        switchValue={smeltBars}
      />
    </>
  );
};

export default Smithing;
