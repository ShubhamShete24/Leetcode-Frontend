import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Difficulty from './components/Difficulty';
import Problem from './components/Problem';
import AddProblem from './components/AddProblem';
import ShowDetails from './components/ShowDetails';


function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Problem />} />
            <Route exact path="/addProblem" element={<AddProblem />} />
            <Route exact path="/topicdiff" element={<Difficulty />} />
            <Route exact path='/:id' element={<ShowDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
