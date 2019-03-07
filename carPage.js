import { cars } from '../cars.js';

const car = cars.filter(company => company.make === 'Dodge');
const carName = cars.filter(names => names.name === 'Dart');




console.log(car);


const mainContainer = document.createElement('div');

mainContainer.className = 'container';


car.forEach((CAR) => {
    
let carElement = document.createElement('div');

carElement.className = 'box';

carMake.textContent = CAR.make;

carElement.textContent = CAR.name;


mainContainer.appendChild(carElement);
});



document.body.appendChild(mainContainer);