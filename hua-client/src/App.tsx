import { useState } from 'react';
import './App.css';
import DayView from './components/DayView';
import Header from './components/Header';
import LogInView from './components/LogInView';
import PlantView from './components/PlantView';

import {Torrance} from './dummyData.js';

function App() {
  const user = Torrance;
  const showDayView = false;
  const contentView = !showDayView ? <PlantView></PlantView> : <DayView></DayView>;

  return (
    <div>
      <Header userInfo = {user.userInfo}></Header>
      {user ?
        contentView : <LogInView></LogInView>
      }
    </div>
  );
}
export default App;
