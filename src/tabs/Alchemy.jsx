import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import Group from "../components/Group";
import ToggleButtons from "../components/ToggleButtons";

import artisanData from "../data/artisan_data.json";

const Alchemy = () => {
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

  const data = artisanData["Alchemy"];

  return (
    <>
      <Attribute
        maxValue={120}
        attributeName={"Your Alchemy Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={120}
        attributeName={"Target Alchemy Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <Group title="Small Potions">
        <ToggleButtons data={data.Small_Potions} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Medium Potions">
        <ToggleButtons data={data.Medium_Potions} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Large Potions">
        <ToggleButtons data={data.Large_Potions} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Scrolls">
        <ToggleButtons data={data.Scrolls} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Equipment">
        <ToggleButtons data={data.Equipment} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Pets">
        <ToggleButtons data={data.Pets} currentLevel={currentLevel} updateElement={updateElement} />
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
        skill="Alchemy"
      />
    </>
  );
};

export default Alchemy;
