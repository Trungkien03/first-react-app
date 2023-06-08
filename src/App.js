import '../src/CSS/App.css';
import Navigation from './components/Navigation';
import Player from './components/Players';
import Footer from './components/Footer';
import { Contact } from './components/Contact';
import {
  Routes,
  Route,
} from "react-router-dom";
import { Details } from './components/Details';

function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
          <Route path='/' element={<Player/>}> 
      </Route>
        <Route path='/detail/:id' element={<Details/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
