export default class CalculatorView {
    constructor(root) {
        this.root = root
        //todo: добавить стили
        //todo: добавить проверку: если кол-во ингредиента равно нулю, округлять до сотых (0.55 гр, 0.25 ч. л.)
        //todo: добавить описание калькулятора, для чего он нужен и как пользоваться (но это не точно) надо подумать
        this.root.innerHTML = `
           <div class="header">
              <button type="button" class="header__restart">
                  <i class="material-icons">refresh</i>
               </button>
           </div>
           <div class="add-recipe">  
             <h2>Добавьте рецепт</h2>
              <div><label>Название рецепта<input type="text" class="add-recipe__title"></label></div>        
              <div class="add-recipe__portions">            
                <label>Сколько порций<input type="number" class="start-portions-count"></label>             
              </div>
              <div><button class="add-recipe-btn">Добавить рецепт</button></div>
              
              <div class="add-ingredients">
              <p>Добавьте ингредиент</p>
                <label>Название<input type="text" id="ingredient-title"></label>
                <label>Количество<input type="number" id="ingredient-count"></label>
                Мера веса <select name="units" id="units">
                             <option value="гр.">гр.</option>
                             <option value="мл.">мл.</option>
                             <option value="шт.">шт.</option>
                             <option value="ч. л.">ч. л.</option>
                             <option value="ст. л.">ст. л.</option>
                             <option value="ст.">ст.</option>
                          </select>
              </div>                      
              <button type="button" class="inputs__add-ingredient-btn">Добавить</button>
           </div>
           
           <div class="new-portions-count">
           <label>На сколько порций рассчитать<input type="number" id="new-portions-input"></label>
           <button class="new-portions-count__btn">OK</button>
           </div>
           
           <div><button id="recount">Рассчитать</button></div>
           
           <div class="ingredients">
           <div>
              <p class="recipe-title">Название рецепта </p><span class="default-portions">0</span> порции
               <ul class="ingredients__list default"></ul>
              </div>
               <div>
               <p class="recipe-title">Название рецепта</p><span class="new-portions-span">0</span> порции
                 <ul class="ingredients__list new"></ul>
               </div>
           </div>
        `
        this.onRestartClick = undefined
        this.onAddRecipeBtnClick = undefined
        this.onAddIngredientBtnClick = undefined
        this.onAddNewPortionsCountBtnClick = undefined
        this.onRecountBtnClick = undefined

        this.root.querySelector('.header__restart').addEventListener('click', () => {
            this.onRestartClick()
        })

        this.root.querySelector('.add-recipe-btn').addEventListener('click', () => {
            this.onAddRecipeBtnClick()
        })

        this.root.querySelector('.inputs__add-ingredient-btn').addEventListener('click', () => {
            this.onAddIngredientBtnClick()
        })

        this.root.querySelector('.new-portions-count__btn').addEventListener('click', () => {
            this.onAddNewPortionsCountBtnClick()
        })

        this.root.querySelector('#recount').addEventListener('click', () => {
            this.onRecountBtnClick()
        })
    }

    addNewRecipe(calc) {
        let titleInput = this.root.querySelector('.add-recipe__title')
        let portionsInput = this.root.querySelector('.start-portions-count')
        if (titleInput.value === '' || portionsInput.value === '') {
            titleInput.classList.add('alert')
            portionsInput.classList.add('alert')

        } else {
            titleInput.classList.remove('alert')
            portionsInput.classList.remove('alert')

            this.root.querySelectorAll('.recipe-title')
                .forEach(r => r.textContent = titleInput.value)
            this.root.querySelector('.default-portions').textContent = portionsInput.value
            calc.defaultPortions = +portionsInput.value


            titleInput.value = ''
            portionsInput.value = ''
        }
    }

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
        ingredientUnitInput.value = ''
    }

    addNewPortionsCount() {
        let newPortionsInput = this.root.querySelector('#new-portions-input')
        if(newPortionsInput.value === '') {
            newPortionsInput.classList.add('alert')
        } else {
            newPortionsInput.classList.remove('alert')
            this.root.querySelector('.new-portions-span').textContent = newPortionsInput.value
        }

        //newPortionsInput.value = ''
    }

    getRecountedIngredientsList (calc) {
        let newPortionsInput = this.root.querySelector('#new-portions-input')
        let newIngredientsList = this.root.querySelector('.new')

        calc.reCountIngredients(+newPortionsInput.value).map(item => {
            newIngredientsList.innerHTML += `<li>${item}</li>`
        }).join('')
    }

    refresh(calc) {
        calc.defaultPortions = 0
        calc.defaultIngredientsList = []
        this.root.querySelector('.default-portions').textContent = calc.defaultPortions
        this.root.querySelector('.new-portions-span').textContent = '0'

    }

}