import Calculator from './Calculator.js'
import CalculatorView from './CalculatorView.js'

let calculator = new Calculator()
let calculatorView = new CalculatorView(document.getElementById('app'))
calculatorView.render(calculator)


calculatorView.onAddRecipeBtnClick = function () {
    calculatorView.addNewRecipe(calculator)
   // console.log('recipe added')
}

calculatorView.onRestartClick = function () {
    calculatorView.render(calculator)
}

