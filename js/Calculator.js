export default class Calculator {
    constructor() {
        this.defaultPortions = 0
        this.defaultIngredientsList = [
        ]
        this.newIngredientsCount = []
    }

    reCountIngredients (newPortions) {
        return this.newIngredientsCount = this.defaultIngredientsList.map(c => Math.trunc((c.count / this.defaultPortions) * +newPortions))
    }
}