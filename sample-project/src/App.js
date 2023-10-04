import React from 'react';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header'
import Home from './Components/Home'
import Realestate from './Components/Realestate';
import Footer from './Components/Footer';
import Property from './Components/Property';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/realestate' element={<Realestate/>}/>
        <Route exact path='/footer' element={<Footer/>}/>
        <Route exact path='/realestate/:id' element={<Property/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
