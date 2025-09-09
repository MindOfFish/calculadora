
let justCalculated = false;

function inputToDisplay(input){

    
    
    const display = document.getElementById("display")
    display.value += input
    display.scrollLeft = display.scrollWidth;

    if (justCalculated){
        display.value = input
        justCalculated = false
    }
    

    
    

}

function calculateDisplay(){
    justCalculated = true

    const display = document.getElementById("display")
    const expression = display.value
    try{result = eval(expression)
        display.value = result

    } catch (error) {
        display.value = "Error"
        
    }
    
    
    


    
    
    
    
}

function clearDisplay(){
    const display = document.getElementById("display")
    display.value = ""

}
