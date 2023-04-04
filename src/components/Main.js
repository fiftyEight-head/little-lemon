import { Routes, Route} from 'react-router-dom'
import HomePage from './HomePage'
import BookingATable from './BookingPage'

function Main(){
    return (
            <Routes>
                <Route path='/Home' element={HomePage} />
                <Route path='/Booking' element={BookingATable}/>
            </Routes>
    )
}
export default Main