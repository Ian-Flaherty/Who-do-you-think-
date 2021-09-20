import Nav from './components/Nav';
import './App.css';
import { Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Start from './components/Start';




function App() {
  
  return (
    <div className='App'>
      
      <Route path='/'>
      
      <Home />
      < Nav />
      </Route>
      <h1>Overall Winner</h1>
      <Route path= '/Start'>
      < Start />
      </Route>
      <Footer />
    </div>
    
  );
}

export default App;
