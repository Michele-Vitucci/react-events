export function AlertClock(){
    function handleButtonClick(){
        const now =new Date()

        alert(`the current time is ${now.toLocaleTimeString()}`)
    }




    return(
        
        <div>
            <p>click the button below 
            to show the current time</p>
            <button onClick={handleButtonClick}>click me!</button>
        </div>
    )
}