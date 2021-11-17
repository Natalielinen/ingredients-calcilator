export default class CalculatorView {
    constructor(root) {
        this.root = root
        //todo: инпут с названием рецепта
        //todo: инпут с дефолтным значением порций (от которого плясать)
        //todo: добавить стили
        //todo: добавить проверку: если кол-во ингредиента равно нулю, округлять до сотых (0.55 гр, 0.25 ч. л.)
        //todo: добавить описание калькулятора, для чего он нужен и как пользоваться (но это не точно) надо подумать
        this.root.innerHTML = `
           <div class="header">
              <div class="header__portions"></div>
              <button type="button" class="header__restart">
                  <i class="material-icons">refresh</i>
               </button>
           </div>
           <div class="add-recipe">  
             <h2>Добавьте рецепт</h2>
              <div ><label>Название рецепта<input type="text" class="add-recipe__title"></label></div>        
              <div class="add-recipe__portions">            
                <label>Сколько порций<input type="number" class="start-portions-count"></label>             
              </div>
              <div><button class="add-recipe">Добавить рецепт</button></div>
              
              <div class="add-ingredients">
              <p>Добавьте ингредиент</p>
                <label>Название<input type="text"></label>
                <label>Количество<input type="number"></label>
                Мера веса <select name="units" id="units">
                             <option value="gram">гр.</option>
                             <option value="milliliter">мл.</option>
                             <option value="piece">шт.</option>
                             <option value="teaspoon">ч. л.</option>
                             <option value="tablespoon">ст. л.</option>
                             <option value="cup">ст.</option>
                          </select>
              </div>                      
              <button type="button" class="inputs__add-btn">Добавить</button>
           </div>
           
           <div class="new-portions-count">
           <label>На сколько порций рассчитать<input type="number"></label>
           </div>
           
           <div class="ingredients">
           <div>
              <p class="recipe-title">Название рецепта </p><span class="default-portions"></span>
               <ul class="ingredients__list default"></ul>
              </div>
               <div>
               <p class="recipe-title">Название рецепта</p><span class="new-portions">4</span> порции
                 <ul class="ingredients__list new"></ul>
               </div>
           </div>
        `
        this.onCountButtonClick = undefined
        this.onRestartClick = undefined

        this.onAddRecipeBtnClick = undefined

        this.root.querySelector('.inputs__add-btn').addEventListener('click', () => {
            this.onCountButtonClick()
        })
        this.root.querySelector('.header__restart').addEventListener('click', () => {
            this.onRestartClick()
        })

        this.root.querySelector('.add-recipe').addEventListener('click', () => {
            this.onAddRecipeBtnClick()
        })
    }

    render(calc) {
        this.root.querySelectorAll('.recipe-title').forEach(recipe => recipe.textContent = calc.defaultTitle)
        this.root.querySelector('.default-portions').textContent = `${calc.defaultPortions} порций`
        this.root.querySelector('.default')
            .innerHTML = calc.defaultIngredientsList
            .map(i => `<li><span>${i.name} - </span><span>${i.count} </span><span>${i.unit}</span></li>`).join('')
        this.root.querySelector('.new').innerHTML = [].map(v => `<li>${v}</\li>`).join('')
    }

   addNewRecipe (calc) {
       console.log(this.root.querySelector('.add-recipe__title').value)

   }

}