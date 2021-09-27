import Filter from './components/Filter';
import { filterData } from './mockData/filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Filter filterData={filterData} />
    </div>
  );
}

export default App;
