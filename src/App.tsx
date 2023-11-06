import React, { useState } from "react";
import "./App.scss";
import VisitorsPerDay from "./components/VisitorsPerDay";
import VisitorsPerCountry from "./components/VisitorsPerCountry.1";

function App() {
  return (
    <div className="app">
      <VisitorsPerDay />
      <VisitorsPerCountry />
    </div>
  );
}

export default App;
