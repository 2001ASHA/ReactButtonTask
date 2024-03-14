import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './component/home/homePage';
import DashBoardPage from './component/dashboard/dashBoardPage';

function App() {
  return (
    <div className="App">
        <h1>Please Route to Home and DashBoard page using the "/home" and "/dashboard"</h1>
        <BrowserRouter>
        <Routes>
                <Route exact path="/home" element={<HomePage/>} />
                <Route  path="/dashboard" element={<DashBoardPage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
