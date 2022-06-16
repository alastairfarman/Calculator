// Maths Functions

const add = function(a,b) {
    return parseFloat(a) + parseFloat(b);
}
  
const subtract = function(a,b) {
      return parseFloat(a) - parseFloat(b);
}
  
const multiply = function(a,b) {
    return parseFloat(a) * parseFloat(b);
}

const divide = function(a,b) {
    return parseFloat(a) / parseFloat(b);
}

const operate = function(operator, a, b) {
    if (operator === "+") {
       return add(a,b);
    }
    else if (operator === "-") {
        return subtract(a,b);
    }
    else if (operator === "*") {
       return  multiply(a,b);
    }
    else if (operator === "/") {
       return  divide(a,b);
    }
}

// Button Selectors

const buttons = document.querySelectorAll('.dbutton')
    , button1 = document.getElementById('1')
    , button2 = document.getElementById('2')
    , button3 = document.getElementById('3')
    , button4 = document.getElementById('4')
    , button5 = document.getElementById('5')
    , button6 = document.getElementById('6')
    , button7 = document.getElementById('7')
    , button8 = document.getElementById('8')
    , button9 = document.getElementById('9')
    , button0 = document.getElementById('0')
    , buttonDecimal = document.getElementById('decimal')
    , buttonAdd = document.getElementById('add')
    , buttonSubtract = document.getElementById('subtract')
    , buttonMultiply = document.getElementById('multiply')
    , buttonDivide = document.getElementById('divide')
    , buttonEquals = document.getElementById('equals')
    , buttonClearAll = document.getElementById('ClearAll')
    , buttonClear = document.getElementById('Clear')
    , displayNumber = document.getElementById('display')
    , info = document.getElementById('info')

// Button Events

buttons.forEach(function(button,index) {
    button.addEventListener("click", () => enable());
});
const disableEquals = () => {
     buttonEquals.disabled = true;
    }
const enable = () => {
        buttonEquals.disabled = false;
    }
button1.addEventListener("click", () => modifyDisplay("1"), false)
button2.addEventListener("click", () => modifyDisplay("2"), false)
button3.addEventListener("click", () => modifyDisplay("3"), false)
button4.addEventListener("click", () => modifyDisplay("4"), false)
button5.addEventListener("click", () => modifyDisplay("5"), false)
button6.addEventListener("click", () => modifyDisplay("6"), false)
button7.addEventListener("click", () => modifyDisplay("7"), false)
button8.addEventListener("click", () => modifyDisplay("8"), false)
button9.addEventListener("click", () => modifyDisplay("9"), false)
button0.addEventListener("click", () => modifyDisplay("0"), false)
buttonDecimal.addEventListener("click", () => modifyDisplay("."), false)
buttonClear.addEventListener("click", () => clearDisplay(""), false)
buttonClearAll.addEventListener("click", () => clearAll(""), false)
buttonAdd.addEventListener("click", () => storedValues.a = displayNumber.textContent, false)
buttonAdd.addEventListener("click", () => storedValues.operator = "+")
buttonAdd.addEventListener("click", () => clearDisplay(""))
buttonAdd.addEventListener('click', () => updateInfo(storedValues.a + " " + storedValues.operator))
buttonSubtract.addEventListener("click", () => storedValues.a = displayNumber.textContent, false)
buttonSubtract.addEventListener("click", () => storedValues.operator = "-")
buttonSubtract.addEventListener("click", () => clearDisplay(""))
buttonSubtract.addEventListener('click', () => updateInfo(storedValues.a + " " + storedValues.operator))
buttonMultiply.addEventListener("click", () => storedValues.a = displayNumber.textContent, false)
buttonMultiply.addEventListener("click", () => storedValues.operator = "*")
buttonMultiply.addEventListener("click", () => clearDisplay(""))
buttonMultiply.addEventListener('click', () => updateInfo(storedValues.a + " " + storedValues.operator))
buttonDivide.addEventListener("click", () => storedValues.a = displayNumber.textContent, false)
buttonDivide.addEventListener("click", () => storedValues.operator = "/")
buttonDivide.addEventListener("click", () => clearDisplay(""))
buttonDivide.addEventListener('click', () => updateInfo(storedValues.a + " " + storedValues.operator))
buttonEquals.addEventListener("click", () => storedValues.b = displayNumber.textContent, false)
buttonEquals.addEventListener("click", () => clearDisplay(operate(storedValues.operator,storedValues.a,storedValues.b)))
buttonEquals.addEventListener('click', () => updateInfo(storedValues.a + " " + storedValues.operator + " " + storedValues.b + " " + "="))
buttonEquals.addEventListener("click", () => storedValues.a = storedValues.b)
buttonEquals.addEventListener("click", () => storedValues.operator = "=")
buttonEquals.addEventListener("click", () => disableEquals())

// Object to to store and access input values
const storedValues = {
    a: "0"
    , b: "0"
    , operator: "+"
    ,
};
// Checks if number on screen is a result and clears, then inputs numbers
function modifyDisplay(num) {
    if (storedValues.operator === "=") {
        clearAll();
    };
    displayNumber.textContent += num;
}
// Clears display with new parameter
function clearDisplay(num) {
    displayNumber.textContent = num;
}
// Clears all (clears display and resets storedValues object to default)
function clearAll() {
    displayNumber.textContent = "";
    info.textContent = "";
    storedValues.operator = "+";
    storedValues.a = "0";
    storedValues.b = "0";
}
// Information display
function updateInfo(content) {
    info.textContent = content;
}

// Dark mode toggle

const darkMode = function() {
    if (document.querySelector('#change').checked) {
        document.querySelector('.darkLight').style.color = "#f0f7f4";
        document.querySelector('.altText').style.color = "#f0f7f4";
        document.querySelector('.altText#info').style.color = "#f0f7f4";
        document.querySelector('.altText#display').style.color = "#f0f7f4";
        let buttonCol = document.getElementsByClassName('dbutton');
        for(let i = 0; i < buttonCol.length; i++){
            buttonCol[i].style.color = "#f0f7f4";
        buttonCol[i].style.backgroundColor = "#1c1c22";
        }
        document.body.style.backgroundColor = "#1c1c22";
    } else {
        document.querySelector('.altText').style.color = "#1c1c22";
        document.querySelector('.darkLight').style.color = "#1c1c22";
        document.querySelector('.altText#info').style.color = "#1c1c22";
        document.querySelector('.altText#display').style.color = "#1c1c22";
        let buttonCol = document.getElementsByClassName('dbutton');
        console.log(buttonCol);
        for(let i = 0; i < buttonCol.length; i++){
            buttonCol[i].style.color = "#1c1c22";
            buttonCol[i].style.backgroundColor = "#F0F7F4";
        }
        document.body.style.backgroundColor = "#F0F7F4";
    }
}
