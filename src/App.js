import './App.css';
import { DisciplinesList } from './DisciplinesList/DisciplinesList';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { DisciplineDetails } from './DisciplinesList/DisciplineDetails/DisciplineDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DisciplinesList />}/>
        <Route path="/details" element={<DisciplineDetails />} />
      </Routes>
      
    </div>
  );
}

export default App;
