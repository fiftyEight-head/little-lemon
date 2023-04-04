
import Chicago from '../components/Chicago';
import CallToAction from '../components/CTA';
import CustomersSay from '../components/CustomersSay';
import Highlights from '../components/Highlights';



export default function HomePage(){

    return (
        <>
            <div className="wrapper" >
                <CallToAction/>
                <Highlights/>
                <CustomersSay/>
                <Chicago/>
            </div>
        </>
    )
}