import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
