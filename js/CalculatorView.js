export default class CalculatorView {
    constructor(root) {
        this.root = root
        this.root.innerHTML = `
           <div class="header">
              <div class="header__title"></div>
              <div class="header__portions"></div>
              <button type="button" class="header__restart">
                  <i class="material-icons">refresh</i>
               </button>
           </div>
           <div class="inputs">
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="text"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="text"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="text"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="text"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="text"></label>
                <label>Мера веса<input type="text"></label>
              </div>            
              <button type="button" class="inputs__count">Рассчитать</button>
           </div>
           <div class="ingredients">
              <ul class="ingredients__list">
                            
              </ul>
           </div>
        `
        this.onCountButtonClick = undefined

        this.root.querySelector('.inputs__count').addEventListener('click', () => {
            this.onCountButtonClick()
        })
    }
    firstRender (calc) {
        this.root.querySelector('.header__title').textContent = calc.defaultTitle
        this.root.querySelector('.header__portions').textContent =`${calc.defaultPortions} порций`
        this.root.querySelector('.ingredients__list')
            .innerHTML = calc.defaultIngredientsList
            .map(i => `<li><span>${i.name} - </span><span>${i.count} </span><span>${i.unit}</span></li>`)
    }

    update(calc) {
        this.updateTitle(calc)
        this.updatePortions(calc)
        this.updateIngredientsNames(calc)
        this.updateIngredientsCounts(calc)
        this.updateUnits(calc)
    }

    updateTitle(calc) {
        this.root.querySelector('.header__title').textContent =`новый рецепт`

    }

    updatePortions(calc) {

    }

    updateIngredientsNames(calc) {

    }

    updateIngredientsCounts(calc) {

    }

    updateUnits(calc) {

    }
}