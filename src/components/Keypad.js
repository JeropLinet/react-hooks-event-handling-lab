// Code Keypad Component Here
import EyesOnMe from "./EyesOnMe"
function Keypad (){

    const listener=(e)=>{
        console.log("Entering password...")
       console.log(e.target.value) 
    }
    return (
        <div>
            <input type="password"  onChange={listener}/>
        </div>
    )
}

export default Keypad;