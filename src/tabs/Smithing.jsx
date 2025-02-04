import React, { useState } from "react";

import "../App.css";
import Attribute from "../components/Attribute";
import Display from "../components/Display";
import Group from "../components/Group";
import ToggleButtons from "../components/ToggleButtons";

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

      <Group title="Misc">
        <ToggleButtons data={data.Misc} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Copper">
        <ToggleButtons data={data.Copper} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Bronze">
        <ToggleButtons data={data.Bronze} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Iron">
        <ToggleButtons data={data.Iron} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Nisoc">
        <ToggleButtons data={data.Nisoc} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Silver">
        <ToggleButtons data={data.Silver} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Cinnabar">
        <ToggleButtons data={data.Cinnabar} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Pythar">
        <ToggleButtons data={data.Pythar} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Gold">
        <ToggleButtons data={data.Gold} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Ibo">
        <ToggleButtons data={data.Ibo} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Meteorite">
        <ToggleButtons data={data.Meteorite} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Display
        level={currentLevel}
        levelPercentage={currentPercentage}
        targetLevel={targetLevel}
        element={element}
        keywords={[""]}
        skill="Smithing"
      />
    </>
  );
};

export default Smithing;
