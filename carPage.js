import { cars } from '../cars.js';

const car = cars.filter(company => company.make === 'Dodge');
const carName = cars.filter(company => company.make === 'Ford');



const yes = cars.map(company => {

    return {name: company.name, make:  company.make}
});



const mainContainer = document.createElement('div');

mainContainer.className = 'container';


car.forEach((CAR) => {

let carElement = document.createElement('div');



carElement.className = 'box';
// carMake.className = 'box';

let carMake = document.createElement('p');

carElement.textContent = CAR.make;

carMake.textContent = CAR.name;


mainContainer.appendChild(carElement);
// mainContainer.appendChild(carMake);
});



document.body.appendChild(mainContainer);

// console.log(car);
console.log(yes);