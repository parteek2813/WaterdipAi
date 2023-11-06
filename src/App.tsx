import React, { useState } from "react";
import "./App.scss";
import VisitorsPerDay from "./components/VisitorsPerDay";

function App() {
  return (
    <div className="app">
      <VisitorsPerDay />
    </div>
  );
}

export default App;
