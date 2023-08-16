import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './views/Home/Home';
import Us from './views/Us/Us';
import Events from './views/Events/Events';
import Bookings from './views/Bookings/Bookings';
import Menu from './views/Menu/Menu';
import Contact from './views/Contact/Contact';
import Wpp from './components/Wpp/Wpp';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="bg-fondo bg-cover">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Us' element={<Us />}/>
        <Route path='/Events' element={<Events />}/>
        <Route path='/Bookings' element={<Bookings />}/>
        <Route path='/Menu' element={<Menu />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Wpp />
      <Footer />
    </div>
  );
}

export default App;
