export default class Calculator {
    constructor() {
        this.defaultPortions = 0

        this.defaultIngredientsList = [
        ]

        this.newIngredientsCount = []
    }

    reCountIngredients (newPortions) {

        return this.newIngredientsCount = this.defaultIngredientsList.map(c => ((c.count / this.defaultPortions) * +newPortions).toFixed(2))
    }
}