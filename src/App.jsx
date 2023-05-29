import "./App.css";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BookingATable from "./components/BookingPage";
import BookingConfirmation from "./components/ConfirmedBooking";
import { Route, Routes, useNavigate } from "react-router-dom";
import { submitAPI } from "./utils/metaApiMockup";

function App() {
  const navigate = useNavigate();

  function submitForm(formData) {
    const res = submitAPI(formData);

    if (res) {
      navigate("/BookingConfirmation");
    }
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/Booking'
          element={<BookingATable submitForm={submitForm} />}
        />
        <Route path='/BookingConfirmation' element={<BookingConfirmation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
