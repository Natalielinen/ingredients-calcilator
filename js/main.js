import Calculator from './Calculator.js'
import CalculatorView from './CalculatorView.js'

let calculator = new Calculator()
let calculatorView = new CalculatorView(document.getElementById('app'))
calculatorView.render(calculator)

calculatorView.onCountButtonClick = function () {
    calculatorView.getNewIngredientsCount(calculator)
    calculator.reCountIngredients(calculatorView.getUsersPortions())
}

calculatorView.onOkBtnClick = function () {
    calculatorView.getUsersPortions()
}

calculatorView.onRestartClick = function () {
    calculatorView.render(calculator)
}

