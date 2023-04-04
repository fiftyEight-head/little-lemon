import Chicago from "./Chicago";
import CallToAction from "./CTA";
import CustomersSay from "./CustomersSay";
import Highlights from "./Highlights";



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