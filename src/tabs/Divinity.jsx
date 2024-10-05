import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import ToggleButtons from "../components/ToggleButtons";

import artisanData from "../data/artisan_data.json";
import CustomSwitch from "../components/CustomSwitch";

const Divinity = () => {
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

  // Soul Demon or use directly control
  const [useSoulDemon, setUseSoulDemon] = useState(true);
  const updateUseSoulDemon = (useSoulDemon) => {
    setUseSoulDemon(useSoulDemon);
  };

  const data = artisanData["Divinity"];

  return (
    <>
      <Attribute
        maxValue={120}
        attributeName={"Your Divinity Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={120}
        attributeName={"Target Divinity Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />
      <ToggleButtons data={data} skill="Divinity" currentLevel={currentLevel} updateElement={updateElement} />
      <CustomSwitch
        value={useSoulDemon}
        updateValue={updateUseSoulDemon}
        element={element}
        trueText="Use Soul Demon"
        falseText="Use Directly"
      />

      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Divinity"
        switchValue={useSoulDemon}
      />
    </>
  );
};

export default Divinity;
