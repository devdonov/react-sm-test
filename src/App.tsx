import React from "react";
import "./App.css";
import { ReduxApp } from "./redux";
import { MobxApp } from "./mobx";

function App() {
  return (
    <>
      <ReduxApp />
      <MobxApp />
    </>
  );
}

export default App;
