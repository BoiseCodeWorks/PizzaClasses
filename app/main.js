import Character from "./models/character.js";
import Episode from "./models/episode.js";

console.log('lets get the party started')
//CHARACTER
let leo = new Character('Leonardo', 'pizza', 'goo.gl/8kb8X9')
let donny = new Character('Donatello', 'pizza', 'https://images-na.ssl-images-amazon.com/images/I/714LY613jlL._SX425_.jpg')
let raph = new Character('Raphael', 'pizza', 'https://upload.wikimedia.org/wikipedia/en/thumb/5/58/TMNTRaphael2012.png/170px-TMNTRaphael2012.png')
let mikey = new Character('Michelangelo', 'pizza', 'https://i.pinimg.com/originals/29/62/dc/2962dc2d5fde7e08af9cc17bf6dbd4a7.jpg')

let turtles = [leo, donny, raph, mikey]


function draw(arr) {
    debugger
    let template = ''
    arr.forEach(char => {
        template += char.getCard();
    });
    document.getElementById('cards').innerHTML = template
}

draw(turtles)

let episode1 = new Episode('Pizza Time', 'The Team fights Pizza through Time', '20:53')
episode1.addCharacter(leo)
document.getElementById('episodes').innerHTML = episode1.getHtml()








///list of Episodes
    //Title
    //Runtime
    //Description


// - "Pizza PARTY!" - 'THE GANG EATS SOME PIZZA' (20:34)