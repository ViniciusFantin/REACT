function ClickMe()
{
    alert ("Nah a, not so fast cowboy! you smells bad asf")
}

const Buttons = () =>{
    return(
       
        <button onClick={ClickMe} className="buttons" > Click to Visit! </button>  
    )
}

export default Buttons