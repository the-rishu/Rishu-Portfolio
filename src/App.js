import './App.css';
import Navbar from '../src/Component/Navbar/Navbar'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="app-div">
      <Navbar/>
     <Outlet/>
    </div>
  );
}

export default App;
