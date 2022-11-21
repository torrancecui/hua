import { useState } from 'react';
import './App.css';
import DayView from './components/DayView';
import Header from './components/Header';
import PlantView from './components/PlantView';

import {Torrance} from './dummyData.js';

function App() {
  const user = Torrance;
  const [view, setView] = useState([]);

  return (
    <div>
      <Header userInfo = {user.userInfo}></Header>
      <PlantView></PlantView>
      <DayView></DayView>
    </div>
  );
}
export default App;
