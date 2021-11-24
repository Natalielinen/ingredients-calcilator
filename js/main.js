import Calculator from './Calculator.js'
import CalculatorView from './CalculatorView.js'

let calculator = new Calculator()
let calculatorView = new CalculatorView(document.getElementById('app'))

calculatorView.onAddRecipeBtnClick = function () {
    calculatorView.addNewRecipe(calculator)
}

calculatorView.onAddIngredientBtnClick = function () {
    calculatorView.addNewIngredient(calculator)
}

calculatorView.onAddNewPortionsCountBtnClick = function () {
    calculatorView.addNewPortionsCount()
}

calculatorView.onRecountBtnClick = function () {
    calculatorView.getRecountedIngredientsList(calculator)
}

calculatorView.onRestartClick = function () {
    console.log('restarted')
    calculatorView.refresh(calculator)
}

