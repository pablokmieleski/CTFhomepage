const name = "Pablo Kmieleski";
const age = 33;
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