// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './components/login/Login'
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Login />
          }> 
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
