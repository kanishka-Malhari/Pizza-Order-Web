import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App"> 
    <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
