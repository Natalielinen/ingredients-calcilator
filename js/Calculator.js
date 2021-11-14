export default class Calculator {
    constructor() {
        this.defaultTitle = 'Тесто для пиццы'
        this.defaultPortions = 6
        this.defaultIngredientsList = [
            {
                name: 'Мука',
                count: 1030,
                unit: 'гр.'
            },
            {
                name: 'Молоко',
                count: 480,
                unit: 'мл.'
            },
            {
                name: 'Дрожжи',
                count: 4,
                unit: 'ч. л.'
            },
            {
                name: 'Яйца',
                count: 4,
                unit: 'шт.'
            },
            {
                name: 'Сахар',
                count: 2,
                unit: 'ст.л.'
            },
            {
                name: 'Соль',
                count: 3,
                unit: 'ч. л.'
            },
        ]
        this.newIngredientsCount = []
    }

    reCountIngredients (newPortions) {
        return this.newIngredientsCount = this.defaultIngredientsList.map(c => Math.trunc((c.count / this.defaultPortions) * +newPortions))
    }
}