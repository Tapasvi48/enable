import Home from './Home';
import Login from './Login';
import Register from './Register';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Table from './Table';

import ProtectedRoute from './ProtectedRoute'
function App() {

  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
        <Route path="/table" element={<ProtectedRoute element={<Table />} />} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/" element ={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
