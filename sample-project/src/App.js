import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Realestate from './Components/Realestate';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/realestate' element={<Realestate/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
