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

      <Group title="Vials">
        <ToggleButtons data={data.Vials} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Boots">
        <ToggleButtons data={data.Boots} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Hoods">
        <ToggleButtons data={data.Hoods} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Leggings">
        <ToggleButtons data={data.Leggings} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Quivers">
        <ToggleButtons data={data.Quivers} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Bodies">
        <ToggleButtons data={data.Bodies} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Staffs">
        <ToggleButtons data={data.Staffs} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Rings">
        <ToggleButtons data={data.Rings} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Necklaces">
        <ToggleButtons data={data.Necklaces} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Boss Rings">
        <ToggleButtons data={data.Boss_Rings} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Boss Necklaces">
        <ToggleButtons data={data.Boss_Necklaces} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Boss Pendants">
        <ToggleButtons data={data.Boss_Pendants} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Daggers">
        <ToggleButtons data={data.Daggers} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Shields">
        <ToggleButtons data={data.Shields} currentLevel={currentLevel} updateElement={updateElement} />
      </Group>

      <Group title="Arrows">
        <ToggleButtons data={data.Arrows} currentLevel={currentLevel} updateElement={updateElement} />
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
