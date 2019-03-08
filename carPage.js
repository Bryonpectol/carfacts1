import { cars } from "/cars.js";



const allCars = cars.map(myCar => {
    let carsYeah = cars.find(CAR => {
      return CAR.make === myCar.make;
    });

    return {
      nAME: myCar.name,
      mAKE: carsYeah.make
    
    };
  });

  const mainContainer = document.createElement("div");

  mainContainer.className = "container";

  allCars.forEach(myCar => {

      let makeElement = document.createElement('div');
      let carElement = document.createElement('p');


    makeElement.className = 'box';

      makeElement.textContent = myCar.mAKE;
      carElement.textContent = myCar.nAME;
 


     
      mainContainer.appendChild(makeElement);
      makeElement.appendChild(carElement);
     
  });

  document.body.appendChild(mainContainer);

  console.log(allCars);