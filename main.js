const name = "Pablo Kmieleski";
const age = 80;
console.log(name);
console.log(`nazywam sie ${name} i mam ${age} lat`);




const about = document.querySelector('.about');
console.log(about);

const body = document.querySelector('.main');
console.log(body);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

console.log(paragraphs[0]);



const button = document.querySelector('.header__button--js')

console.log(button);

function handleClick() {
    console.log('halo');
}

button.addEventListener('click', handleClick)



button.addEventListener('click', () => {
    console.log('hallo arrow function');
})

button.addEventListener('click', (e) => {
    console.log(e);
    console.log('hallo arrow event');
})

button.addEventListener('click', (e) => {
    const header = document.querySelector('.main__header--js')
    header.innerHTML = 'klik, klik';
    header.classList.toggle('main__header--heading__red');
    /* alert('hello'); */
    if (header.classList.contains('main__header--heading__red')) {
        console.log('jest klasa')
    } else {
        console.log('klasy brak')
    }

})



const navigationSwitcher = document.querySelector('.navigation__switcher--js');
const navigationX = document.querySelector('.navigation__list--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
    if (navigationX.classList.contains('navigation__list--visible')) {
        navigationSwitcher.innerHTML = 'X';
    } else {
        navigationSwitcher.innerHTML = '≡';
    }
});


function contentUpdater(querySelectorContent, content2) {
    const element = document.querySelector (querySelectorContent);
    element.innerHTML = content2;
};

contentUpdater('.witcher--js', ' la la ')




const js = document.querySelector('.block__element--js');
console.log(js);


console.log(js.innerHTML);


js.innerHTML = '<h1>POZDRO JS<h1>';


/* const ble = document.querySelector('.main__header--heading'); 

ble.innerHTML = 'siemanko'; */

if (age < 20) {
    console.log('masz mniej niz 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz wiecej niz 20 ale mniej niz 30 lat');
} else {
    console.log('jestes 31+');
}

switch (age) {
    case 20:
        console.log('masz 20 lat')
        break;
    case 30:
        console.log('masz 30 lat')
        break;
    default:
        console.log(`masz rowno ${age} lat`)
        break;
}


const amIOLD = (age > 70) ? 'yes' : 'no';
console.log(amIOLD);


let oldIncdicator;

if (age > 70) {
    oldIncdicator = 'yes starcze';
} else {
    oldIncdicator = 'no mlodzieniaszku';
}

console.log(oldIncdicator);




if (age > 70) {
    console.log('jestes stary')
} else {
    console.log('jestes mlody')
}


function calculate(x) {
    x = x + 3;
    console.log(x);
    return x * 7;
}

calculate(3);

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

const calculateFat = (x) => {
    x = x + 3;
    console.log(`fat: ${x}`);
    return x * 7;
}
console.log(calculateFat(48));

const calculateFatter = x => (x + 3) * 7;
console.log(calculateFatter(545));




const imieNazw = (name2, age2) => {
    console.log(`Cześć ${name2}, Twoj wiek to ${age2}!`)
}

imieNazw('Pablo', 33)

const nameNEW = 'PAwello'
const ageNEW = '333'

imieNazw(nameNEW, ageNEW);



const imieWiek = (name, age) => {
    console.log(`funkcja strzalkowa ${name} i mam ${age} lat`);
}

imieWiek('Pablo', 300);

function funkcja3(imie3, wiek3) {
    console.log(`funkcja zwykla ${imie3} i mam ${wiek3} lat`);
}

funkcja3('roman', 18);