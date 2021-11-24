export default class CalculatorView {
    constructor(root) {
        this.root = root
        this.root.innerHTML = `
        <header class="header">
        <h1>Калькулятор рассчета ингредиентов</h1>
        <p>
            <button type="button" class="header__restart">
                <i class="material-icons">refresh</i>
            </button>
        </p>
    </header>
    <section class="add-params">
        <section class="add-recipe">
            <h2>Добавить рецепт</h2>
            <div class="add-recipe__inputs">
                <div>
                    <label for="add-recipe__title">Название </label>
                    <input type="text" id="add-recipe__title">
                    <input type="number" id="start-portions-count" min="0" max="100">
                    <label for="start-portions-count">порций </label>
                </div>
                <div class="add-recipe__new-portions"><label for="new-portions-count">Рассчитать на </label><input
                        type="number" id="new-portions-count"
                        min="0"
                        max="100">
                    <span>порций</span>
                </div>
                <button class="add-recipe-btn plus-btn">+</button>
            </div>
        </section>
        <section class="add-ingredient">
            <h2>Добавить ингредиент</h2>
            <div class="add-ingredient__inputs">
                <div>
                    <label for="ingredient-title">Название</label>
                    <input type="text" id="ingredient-title">
                    <label for="ingredient-count">Кол-во</label>
                    <input type="number" id="ingredient-count" min="0">
                    <select name="units" id="units">
                        <option value="гр.">гр.</option>
                        <option value="мл.">мл.</option>
                        <option value="шт.">шт.</option>
                        <option value="ч. л.">ч. л.</option>
                        <option value="ст. л.">ст. л.</option>
                        <option value="ст.">ст.</option>
                    </select>
                </div>
                <button class="add-ingredient-btn plus-btn">+</button>
            </div>
        </section>
    </section>
    <section class="ingredients">
        <table class="ingredients__table">
            <thead>
            <tr>
                <td class="recipe-title">Рецепт</td>
                <td class="default-portions">На <span>6</span> порций</td>
                <td class="new-portions">На <span>4</span> порции</td>
                <td>Мера веса</td>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>Мука</td>
                <td>100</td>
                <td>20</td>
                <td>грамм</td>
            </tr>
            </tbody>
        </table>
    </section>         
        `
        this.onRestartClick = undefined //todo: to fix
        this.onAddRecipeBtnClick = undefined //готово
        this.onAddIngredientBtnClick = undefined
        this.onAddNewPortionsCountBtnClick = undefined
        this.onRecountBtnClick = undefined


        /*this.root.querySelector('.header__restart').addEventListener('click', () => {
            this.onRestartClick()
        })*/

        this.root.querySelector('.add-recipe-btn').addEventListener('click', () => {
            this.onAddRecipeBtnClick()
        })

        /*this.root.querySelector('.inputs__add-ingredient-btn').addEventListener('click', () => {
            this.onAddIngredientBtnClick()
        })

        this.root.querySelector('.new-portions-count__btn').addEventListener('click', () => {
            this.onAddNewPortionsCountBtnClick()
        })

        this.root.querySelector('#recount').addEventListener('click', () => {
            this.onRecountBtnClick()
        })*/
    }

    addNewRecipe(calc) { // готово
        let titleInput = this.root.querySelector('#add-recipe__title')
        let portionsInput = this.root.querySelector('#start-portions-count')
        let newPortionsCountInput = this.root.querySelector('#new-portions-count')
        if (titleInput.value === '' || portionsInput.value === '' || newPortionsCountInput.value === '') {
            titleInput.classList.add('alert')
            portionsInput.classList.add('alert')
            newPortionsCountInput.classList.add('alert')

        } else {
            titleInput.classList.remove('alert')
            portionsInput.classList.remove('alert')
            newPortionsCountInput.classList.remove('alert')

            this.root.querySelector('.recipe-title').textContent = titleInput.value
            this.root.querySelector('.default-portions').textContent = `На ${portionsInput.value} порций`
            this.root.querySelector('.new-portions').textContent = `На ${newPortionsCountInput.value} порций`
            calc.defaultPortions = +portionsInput.value

            titleInput.value = ''
            portionsInput.value = ''
        }
    } // готово

    addNewIngredient(calc) {
        let ingredientTitleInput = this.root.querySelector('#ingredient-title')
        let ingredientCountInput = this.root.querySelector('#ingredient-count')
        let ingredientUnitInput = this.root.querySelector('#units')
        if(ingredientTitleInput.value === '' || ingredientCountInput.value === '') {
            ingredientTitleInput.classList.add('alert')
            ingredientCountInput.classList.add('alert')
        } else {
            ingredientTitleInput.classList.remove('alert')
            ingredientCountInput.classList.remove('alert')
            let newIngredient = {
                name: ingredientTitleInput.value,
                count: ingredientCountInput.value,
                unit: ingredientUnitInput.value
            }

            calc.defaultIngredientsList.push(newIngredient)

            this.root.querySelector('.default')
                .innerHTML = calc.defaultIngredientsList
                .map(i => `<li><span>${i.name} - </span><span>${i.count} </span><span>${i.unit}</span></li>`).join('')
        }

        ingredientTitleInput.value = ''
        ingredientCountInput.value = ''
    }


    getRecountedIngredientsList (calc) {
        let newPortionsCount = this.root.querySelector('.new-portions-span')
        let newIngredientsList = this.root.querySelector('.new')

        calc.reCountIngredients(+newPortionsCount.textContent).map(item => {
            newIngredientsList.innerHTML += `<li>${item}</li>`
        }).join('')
    }

    refresh(calc) {
        calc.defaultPortions = 0
        calc.defaultIngredientsList = []
        this.root.querySelector('.default-portions').textContent = calc.defaultPortions
        this.root.querySelector('.new-portions-span').textContent = '0'
        this.root.querySelector('.default')
            .innerHTML = calc.defaultIngredientsList
            .map(i => `<li><span>${i.name} - </span><span>${i.count} </span><span>${i.unit}</span></li>`).join('')
        let newIngredientsList = this.root.querySelector('.new')
       newIngredientsList.innerHTML = ''
        this.root.querySelectorAll('.recipe-title').forEach(r => r.textContent = 'Название рецепта')
    }

}