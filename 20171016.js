
var menu = require('console-menu');
menu([
    { hotkey: '1', title: 'Search a tip', selected: true },
    { hotkey: '2', title: 'Include new tip' },
    { hotkey: '3', title: 'Delete a tip' },
    { separator: true },
    { hotkey: 'Q', title: 'Quit' },
], {
    header: 'Origin > Destiny Tips: Menu',
    border: true,
}).then(item => {
    if (item) {
        console.log('You chose: ' + JSON.stringify(item));
    } else {
        console.log('You cancelled the menu.');
    }
});



const tip01 = {
    destiny_country: 'Tailândia',
    destiny_city: '',
    origin_country: 'Brasil',
    origin_city: '',
    sugestion: 'Compre roupas sob medida no começo da viagem, busque-as prontas no final'
}
const tip02 = {
    destiny_country: 'Tailândia',
     destino_city: '',
     origin_country: 'Brasil',
     origin_city: '',
     sugestion: 'Ande de elefante!'
    }
const tip03 = {
    destiny_country: 'França',
    destiny_city: 'Paris',
    origin_country: 'Brasil',
    origin_city: '',
    sugestion: 'Ande de elefante!'
}

let arrayOfTips = [ tip01, tip02, tip03 ]



const result = arrayOfTips.filter(tip => tip.destiny_country === 'Tailândia')

console.log(result)






