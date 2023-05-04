
class Calculator {
    constructor(){
        this.currentNumber = 0

       
    }
    buttonsFunctionality(){
         //querySelectorAll returns a NodeList, which is a collection of elements that doesn't have a "addEventListener" method
         let buttons = document.querySelectorAll('.buttons');
         //And because of that we loop through the NodeList and attach the event listener to each button individually.
         buttons.forEach((button) =>{
             button.addEventListener('click', this.displayNumbers.bind(this));
        })
    }
    displayNumbers(){
    //event.target is a property of the event object that refers to the element that triggered the event.(in our case, it's the button that was clicked)
    const clickedButtonValue = event.target.textContent;
    //input elements need a "value" property that allows us to get/set the input field.
    
    if(clickedButtonValue === "="){
        return;
    }
        //append the new input to the current input.
        this.currentNumber += clickedButtonValue;
        const inputField = document.querySelector('.input');
        // if the input element is 0 we replace it to the clicked button's value. if it is not, we append the clicked button value to the current value.
        inputField.value = inputField.value === "0" ? clickedButtonValue : inputField.value + clickedButtonValue;
    }

}

const myCalculator = new Calculator();
myCalculator.buttonsFunctionality();