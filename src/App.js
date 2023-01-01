import './App.css';

import { Layout } from './wrapper/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import {Gallery} from './pages/Gallery'
import {Locations} from './pages/Locations'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { FooterBar } from './wrapper/Footer';

function App() {



  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Layout/>}>
          <Route  index element={<Home/>}/>
          <Route  path="about" element={<About/>}/>
          <Route  path= "gallery" element={<Gallery/>}/>
          <Route  path= "contact" element={<Contact/>}/>
          <Route  path= "locations" element={<Locations/>}/>
        </Route>
      </Routes>
      <FooterBar/>
    </Router>
    

  );
}
export default App;
