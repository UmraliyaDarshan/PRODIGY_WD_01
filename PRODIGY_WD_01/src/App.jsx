import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import Contact from './components/Contact';
import Services from './components/Services';
import About from './components/About';
import Home from "./components/Home";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/services' element={<Services/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
