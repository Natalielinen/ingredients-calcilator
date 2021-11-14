import Calculator from './Calculator.js'
import CalculatorView from './CalculatorView.js'


let calculator = new Calculator()
let calculatorView = new CalculatorView(document.getElementById('app'))
calculatorView.firstRender(calculator)

calculatorView.onCountButtonClick = function () {
    calculatorView.update(calculator)
}

console.log(calculator.reCountIngredients(4, []))