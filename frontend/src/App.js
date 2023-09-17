import './App.css';
import Home from './components/Home/';
import Header from './components/Header'
import Footer from './components/Footer'
import Team from './components/Team'
import {
  Routes, Route
} from "react-router-dom";

import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home/';
import Team from './components/Meet Team'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/team' element={<Team />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
