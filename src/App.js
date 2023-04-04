
import './App.css';
import HomePage from '../src/components/HomePage'
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import BookingATable from './components/BookingPage';


function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/Booking' element={<BookingATable/>} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App;
