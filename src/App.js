import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Smithing from "./tabs/Smithing";
import Crafting from "./tabs/Crafting";
import Cooking from "./tabs/Cooking";
import Fletching from "./tabs/Fletching";
import Mining from "./tabs/Mining";
import Woodcutting from "./tabs/Woodcutting";
import Fishing from "./tabs/Fishing";
import Combat from "./tabs/Combat";
import Alchemy from "./tabs/Alchemy";
import Header from "./components/Header";
import { Box, Tab, Tabs } from "@mui/material";

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Header title="Kaetram Skills Calculator" />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 1 }}>
          <Tabs value={value} onChange={handleChange} variant="scrollable">
            <Tab label="Smithing" component={Link} to="/smithing" />
            <Tab label="Cooking" component={Link} to="/cooking" />
            <Tab label="Fletching" component={Link} to="/fletching" />
            <Tab label="Mining" component={Link} to="/mining" />
            <Tab label="Woodcutting" component={Link} to="/woodcutting" />
            <Tab label="Fishing" component={Link} to="/fishing" />
            <Tab label="Alchemy" component={Link} to="/alchemy" />
          </Tabs>
        </Box>
      </Box>

      <Routes>
        <Route path="/" element={<Navigate to="/smithing" />} />
        <Route path="smithing" element={<Smithing />} />
        <Route path="crafting" element={<Crafting />} />
        <Route path="cooking" element={<Cooking />} />
        <Route path="fletching" element={<Fletching />} />
        <Route path="mining" element={<Mining />} />
        <Route path="woodcutting" element={<Woodcutting />} />
        <Route path="fishing" element={<Fishing />} />
        <Route path="combat" element={<Combat />} />
        <Route path="alchemy" element={<Alchemy />} />
      </Routes>
    </>
  );
};

export default App;
