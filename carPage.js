import { cars } from "/cars.js";



const allCars = cars.map(CARS => {
    let carsYeah = cars.find(CAR => {
      return CAR.make === CARS.make;
    });

    return {
      name: CARS.name,
      make: carsYeah.make
    
    };
  });

  const mainContainer = document.createElement("div");

  mainContainer.className = "container";

  allCars.forEach(CARS => {
      let makeElement = document.createElement('div');
      let carElement = document.createElement('p');


    makeElement.className = 'box';



      mainContainer.appendChild(makeElement);
      mainContainer.appendChild(carElement);
  });

  console.log(allCars);