import '../src/CSS/App.css';
import Navigation from './components/Navigation';
import Player from './components/Players';
import Footer from './components/Footer';
import Main from './components/main';
function App() {
  return (
    <div className='App'>
      <Navigation/>
      <Player/>
      <Footer/>
    </div>
  );
}
export default App;
