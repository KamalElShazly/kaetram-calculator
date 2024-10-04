import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import Smithing from "./tabs/Smithing";
import Cooking from "./tabs/Cooking";
import Fletching from "./tabs/Fletching";
import Mining from "./tabs/Mining";
import Woodcutting from "./tabs/Woodcutting";
import Fishing from "./tabs/Fishing";
import Alchemy from "./tabs/Alchemy";
import Header from "./components/Header";
import { Box, Tab, Tabs } from "@mui/material";
import Foraging from "./tabs/Foraging";

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
            <Tab label="Woodcutting" component={Link} to="/woodcutting" />
            <Tab label="Mining" component={Link} to="/mining" />
            <Tab label="Fishing" component={Link} to="/fishing" />
            <Tab label="Foraging" component={Link} to="/foraging" />
            <Tab label="Fletching" component={Link} to="/fletching" />
            <Tab label="Smithing" component={Link} to="/smithing" />
            <Tab label="Cooking" component={Link} to="/cooking" />
            <Tab label="Alchemy" component={Link} to="/alchemy" />
          </Tabs>
        </Box>
      </Box>

      <Routes>
        <Route path="/" element={<Navigate to="/woodcutting" />} />
        <Route path="woodcutting" element={<Woodcutting />} />
        <Route path="mining" element={<Mining />} />
        <Route path="fishing" element={<Fishing />} />
        <Route path="foraging" element={<Foraging />} />
        <Route path="fletching" element={<Fletching />} />
        <Route path="smithing" element={<Smithing />} />
        <Route path="cooking" element={<Cooking />} />
        <Route path="alchemy" element={<Alchemy />} />
      </Routes>
    </>
  );
};

export default App;
