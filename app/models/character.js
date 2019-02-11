console.log('Lets make some characters')
//Keyword 'class' defines that this object is a type definition
//Class names are capitalized and single instances of their type
export default class Character {
    //used when instantiating an object to add properties to the object
    constructor(name, favFood, img) {
        this.name = name
        this.favFood = favFood
        this.img = img
    }

    //methods are defined after the constructor directly on the object
    eat(food) {
        if (food == this.favFood) {
            console.log('Cowabunga dude!')
        }
        console.log(`${this.name} is eating ${food}`)
    }

    getCard() {
        return `
        <div class="col">
            <div class="card">
                <img src="${this.img}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.favFood}</p>
                </div>
            </div>
        </div>`
    }
}

