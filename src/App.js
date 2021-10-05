import Filter from './components/Filter';
import Calender from './components/Calender';
import { filterData } from './mockData/filter';
import './App.css';
import React from 'react';

function App() {
  const [upperCal, setUpperCal] = React.useState({})
  const [lowerCal, setLowerCal] = React.useState({})

  const handleUpperCalChange = React.useCallback((data) => {
    setUpperCal(data);
  }, []);

  const handleLowerCalChange = React.useCallback((data) => {
    setLowerCal(data);
  }, []);

  return (
    <div className="App">
      <Calender handleChange={handleUpperCalChange} />
      <Filter filterData={filterData} />
      <Calender handleChange={handleLowerCalChange} />
    </div>
  );
}

export default App;
