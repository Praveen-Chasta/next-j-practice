import { Signup } from "@/component/Signup";

export default function signup(){
    return (
        <div>
            <Signup/> 
        </div>
    )
}


// Q Why we use Next JS ?
// and => 1. React Has its limitation.
//     => 2. We have to create two separate files for Frontend and Backend.
//     => 3. React Supports Client side rendering and Next JS support server side rendering.
//     => 4. React Has water falling problem (Too many steps present to fetching data).
//     => 5. React is not providing box routing we use react-router-dom.