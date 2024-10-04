import React from "react";
import "./App.css";
import { Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import { Box, Tab, Tabs } from "@mui/material";
import { TabContext } from '@mui/lab';

import Header from "./components/Header";
import Footer from "./components/Footer";

import Woodcutting from "./tabs/Woodcutting";
import Mining from "./tabs/Mining";
import Fishing from "./tabs/Fishing";
import Foraging from "./tabs/Foraging";
import Fletching from "./tabs/Fletching";
import Smithing from "./tabs/Smithing";
import Cooking from "./tabs/Cooking";
import Alchemy from "./tabs/Alchemy";
import Crafting from "./tabs/Crafting";
import Divinity from "./tabs/Divinity";

const App = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header title="Kaetram Skills Calculator" />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", marginBottom: 1 }}>
          <TabContext value={pathname}>
            <Tabs value={pathname} variant="scrollable">
              <Tab label="Woodcutting" component={Link} to="/woodcutting" value="/woodcutting" />
              <Tab label="Mining" component={Link} to="/mining" value="/mining" />
              <Tab label="Fishing" component={Link} to="/fishing" value="/fishing" />
              <Tab label="Foraging" component={Link} to="/foraging" value="/foraging" />
              <Tab label="Fletching" component={Link} to="/fletching" value="/fletching" />
              <Tab label="Smithing" component={Link} to="/smithing" value="/smithing" />
              <Tab label="Cooking" component={Link} to="/cooking" value="/cooking" />
              <Tab label="Alchemy" component={Link} to="/alchemy" value="/alchemy" />
              <Tab label="Crafting" component={Link} to="/crafting" value="/crafting" />
              <Tab label="Divinity" component={Link} to="/divinity" value="/divinity" />
            </Tabs>
          </TabContext>
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
        <Route path="crafting" element={<Crafting />} />
        <Route path="divinity" element={<Divinity />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
