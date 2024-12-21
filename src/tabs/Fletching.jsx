import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import Group from "../components/Group";
import ToggleButtons from "../components/ToggleButtons";

import artisanData from "../data/artisan_data.json";

const Fletching = () => {
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

  const data = artisanData["Fletching"];

  return (
    <>
      <Attribute
        maxValue={120}
        attributeName={"Your Fletching Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={120}
        attributeName={"Target Fletching Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <Group title="Wood">
        <ToggleButtons data={data.Wood} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Arrows">
        <ToggleButtons data={data.Arrows} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Weapons">
        <ToggleButtons data={data.Weapons} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Misc">
        <ToggleButtons data={data.Misc} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Fletching"
      />
    </>
  );
};

export default Fletching;
