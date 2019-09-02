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


const js = document.querySelector('.block__element--js');
console.log(js);




console.log(js.innerHTML);


js.innerHTML = '<h1>POZDRO JS<h1>';


const ble = document.querySelector('.main__header--heading');

ble.innerHTML = 'siemanko';

if (age < 20) {
    console.log('masz mniej niz 20 lat');
} else if ((age >= 20) && (age <=30)) {
    console.log('masz wiecej niz 20 ale mniej niz 30 lat');
} else {
    console.log('jestes 31+');
}

switch (age) {
    case 20:
        console.log('masz 20 lat')
    break;
    case 30 :
        console.log('masz 30 lat')
    break;
    default :
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
    return x*7;
}

    calculate(3);

    console.log(calculate(2));
    const myCalculation = calculate(4);
    console.log(myCalculation);

    const calculateFat = (x) => {
        x = x + 3;
        console.log(`fat: ${x}`);
        return x*7;
    }    	
    console.log(calculateFat(48));

    const calculateFatter = x => (x+3)*7;    	
    console.log(calculateFatter(545));

