
class Calculator {
    currentNumber = 0
    buttonValues = []
    constructor(){
    this.lastOperation = null;
    this.buttonsFunctionality()
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
        const inputField = document.querySelector('.input');
        let lastChar = inputField.value[inputField.value.length - 1];
        let findX = inputField.value.includes("X")
        
        if(clickedButtonValue === "="){
            if(this.lastOperation === "-" && findX){
                return this.multiply();
            } else if (this.lastOperation === "+"){
                return this.sum();
            } else if (this.lastOperation === "-"){
                return this.substract();
            } else if (this.lastOperation === "X"){
                return this.multiply();
            } else if(this.lastOperation === "/"){
                return this.divide()
            } else {
                return;
            }
        } else if(clickedButtonValue === "C"){
            inputField.value = "";
            this.currentNumber = 0;
            this.lastOperation = null;
            return;
        }
        if(lastChar === "X" && clickedButtonValue === "-"){
        lastChar = clickedButtonValue
        } else if ("+-X/.".includes(clickedButtonValue) && "+-X/.".includes(lastChar)) {
          return;
        }
        if(inputField.value === "" && clickedButtonValue === "/" || inputField.value === "" && clickedButtonValue === "X" || inputField.value === "" && clickedButtonValue === "."){
            return;
        }
        this.currentNumber += clickedButtonValue;
        inputField.value = inputField.value === '00' ? clickedButtonValue : inputField.value + clickedButtonValue;
        if(clickedButtonValue === "+" || clickedButtonValue === "-" || clickedButtonValue === "X" || clickedButtonValue === "/"){
            this.lastOperation = clickedButtonValue;
        }
        if ("+-X/".includes(clickedButtonValue)) {
            this.lastOperation = clickedButtonValue;
          }
        }
    sum(){
        const inputField = document.querySelector('.input');
        const numbers = inputField.value.split("+");
        let result = 0;
        for(let i = 0; i < numbers.length; i++){
            const num = parseFloat(numbers[i])
            if(!isNaN(num)){
                result += num;
            }
        }
        if (result % 1 !== 0 && result.toString().split('.')[1].length > 4) {
            result = result.toFixed(4);
          }
        inputField.value = result;
        this.currentNumber = result;
    }
    substract(){
        const inputField = document.querySelector('.input');
        const numbers = inputField.value.split('-');
        let result = numbers[0];
        for(let i = 1; i < numbers.length; i++){
            const num = parseFloat(numbers[i])
            if(!isNaN(num)){
                result -= num;
            }
        }
        if (result % 1 !== 0 && result.toString().split('.')[1].length > 4) {
            result = result.toFixed(4);
          }
        inputField.value = result;
        this.currentNumber = result;
    }
    multiply(){
        const inputField = document.querySelector('.input');
        const numbers = inputField.value.split('X');
        let result = 1;
        for(let i = 0; i < numbers.length; i++){
            const num = parseFloat(numbers[i]);
            if(!isNaN(num)){
                result *= num;
            }
        }
        if (result % 1 !== 0 && result.toString().split('.')[1].length > 4) {
            result = result.toFixed(4);
          }
        inputField.value = result;
        this.currentNumber = result;
    }
    divide(){
        const inputField = document.querySelector('.input');
        const numbers = inputField.value.split('/');
        let result = numbers[0];
        for(let i = 1; i < numbers.length; i++){
            const num = parseFloat(numbers[i]);
            if(!isNaN(num)){
                result /= num;
            }
        }
        if(result / 0){
            inputField.value = "Infinity";
        }

        if (result % 1 !== 0 && result.toString().split('.')[1].length > 4) {
            result = result.toFixed(4);
        } 
        inputField.value = result;
        this.currentNumber = result;
    }
}
const myCalculator = new Calculator();