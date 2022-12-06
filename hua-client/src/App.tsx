import { useState } from "react";
import "./App.css";
import LogInView from "./components/LogInView";
import ContentView from "./components/ContentView";
import Header from "./components/Header";

import { Torrance } from "./dummyData.js";

function App() {
  const user = Torrance;
  return (
    <div>
      <Header userInfo={user.userInfo}></Header>
      {user !== null ? (
        <ContentView plantList={user.plantList}></ContentView>
      ) : (
        <LogInView></LogInView>
      )}
    </div>
  );
}
export default App;
