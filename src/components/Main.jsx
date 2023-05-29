import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import BookingATable from "./BookingPage";
import BookingConfirmation from "./ConfirmedBooking";

function Main() {
  return (
    <Routes>
      <Route path='/Home' element={HomePage} />
      <Route path='/Booking' element={BookingATable} />
      <Route path='/BookingConfirmation' element={BookingConfirmation} />
    </Routes>
  );
}
export default Main;
