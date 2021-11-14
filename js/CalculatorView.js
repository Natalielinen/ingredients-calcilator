export default class CalculatorView {
    constructor(root) {
        this.root = root
        //todo: мерой веса должен быть select
        //todo: добавить кнопку + добавить новый ингредиент, по нажатию на нее появляется новое поле добавления ингредиента
        //todo: добавлять можно не больше 10 ингредиентов!!! Когда есть уже 10 ингредиентов кнопка + исчезает
        //todo: инпут с названием рецепта
        //todo: инпут с дефолтным значением порций (от которого плясать)
        //todo: добавить стили
        //todo: добавить проверку: если кол-во ингредиента равно нулю, округлять до сотых (0.55 гр, 0.25 ч. л.)
        //todo: добавить описание калькулятора, для чего он нужен и как пользоваться (но это не точно) надо подумать
        this.root.innerHTML = `
           <div class="header">
              <div class="header__title"></div>
              <div class="header__portions"></div>
              <button type="button" class="header__restart">
                  <i class="material-icons">refresh</i>
               </button>
           </div>
           <div class="inputs">
              <div class="inputs__portions">
                <label>Количество порций<input type="number"></label>
                <button class="inputs__ok-btn">OK</button>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="number"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="number"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="number"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="number"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="number"></label>
                <label>Мера веса<input type="text"></label>
              </div>
              <div>
                <label>Название<input type="text"></label>
                <label>Количество<input type="number"></label>
                <label>Мера веса<input type="text"></label>
              </div>                         
              <button type="button" class="inputs__count">Рассчитать</button>
           </div>
           <div class="ingredients">
           <div>
              <p>Начальное количество</p>
               <ul class="ingredients__list default"></ul>
              </div>
               <div>
               <p>Новое количество</p>
                 <ul class="ingredients__list new"></ul>
               </div>
           </div>
        `
        this.onCountButtonClick = undefined
        this.onRestartClick = undefined
        this.onOkBtnClick = undefined

        this.root.querySelector('.inputs__count').addEventListener('click', () => {
            this.onCountButtonClick()
        })

        this.root.querySelector('.header__restart').addEventListener('click', () => {
            this.onRestartClick()
        })

        this.root.querySelector('.inputs__ok-btn').addEventListener('click', () => {
            this.onOkBtnClick()
        })
    }
    render (calc) {
        this.root.querySelector('.header__title').textContent = calc.defaultTitle
        this.root.querySelector('.header__portions').textContent =`${calc.defaultPortions} порций`
        this.root.querySelector('.default')
            .innerHTML = calc.defaultIngredientsList
            .map(i => `<li><span>${i.name} - </span><span>${i.count} </span><span>${i.unit}</span></li>`).join('')
        this.root.querySelector('.new').innerHTML = [].map(v => `<li>${v}</\li>`).join('')
        this.root.querySelector('.inputs__portions').querySelector('input').value = ''
    }

    getUsersPortions () {
        let inputValue = this.root.querySelector('.inputs__portions').querySelector('input').value
        this.root.querySelector('.header__portions').textContent =`${inputValue} порций`
        return inputValue
    }

    getNewIngredientsCount (calc) {
        let newValues = calc.reCountIngredients(this.root.querySelector('.inputs__portions').querySelector('input').value)
        this.root.querySelector('.new').innerHTML = newValues.map(v => `<li>${v}</\li>`).join('')
    }

}