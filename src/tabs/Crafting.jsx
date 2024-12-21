import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import Group from "../components/Group";
import ToggleButtons from "../components/ToggleButtons";

import artisan_data from "../data/artisan_data.json";

const Crafting = () => {
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

  const data = artisan_data["Crafting"];

  return (
    <>
      <Attribute
        maxValue={120}
        attributeName={"Your Crafting Level"}
        updateAttribute={updateCurrentLevel}
        updateAttribute2={updateCurrentPercentage}
        isCurrentLevel={true}
      />
      <Attribute
        maxValue={120}
        attributeName={"Target Crafting Level"}
        updateAttribute={updateTargetLevel}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      />

      <Group title="Misc">
        <ToggleButtons data={data.Misc} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Staves">
        <ToggleButtons data={data.Staves} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Rings">
        <ToggleButtons data={data.Rings} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Necklaces">
        <ToggleButtons data={data.Necklaces} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Gear">
        <ToggleButtons data={data.Gear} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Shards">
        <ToggleButtons data={data.Shards} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Dust">
        <ToggleButtons data={data.Dust} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Chiseling">
        <ToggleButtons data={data.Chiseling} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Crafting"
      />
    </>
  );
};

export default Crafting;
