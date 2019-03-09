import { cars } from "/cars.js";



const allCars = cars.map(myCar => {
    let carsYeah = cars.find(CAR => {
      return CAR.make === myCar.make;
    });

    return {
      // this is how the script finds the item in the array.
      nAME: myCar.name,
      mAKE: carsYeah.make,
      price: myCar.price,
      hp: myCar.hp,
      origin: myCar.origin,
      drive: myCar.drive,
      transmission: myCar.transmission,
      engine: myCar.engine,
      weight: myCar.weight,
      zeroto: myCar.zeroto,
      MPG: myCar.MPG,
      torque: myCar.torque,
      year: myCar.year,
      cylinders: myCar.cylinders,
      MPHandKPH: myCar.MPHandKPH,
      image: myCar.image
    };
  });

  const mainContainer = document.createElement("div");
  const footerElement = document.createElement('footer');

  mainContainer.className = "container";

  allCars.forEach(myCar => {

      // all of the br elements.
      let br1Element = document.createElement('br');
      let br2Element = document.createElement('br');
      let br3Element = document.createElement('br');
      let br4Element = document.createElement('br');
      let br5Element = document.createElement('br');
      let br6Element = document.createElement('br');
      let br7Element = document.createElement('br');
      let br8Element = document.createElement('br');
      let br9Element = document.createElement('br');
      let br10Element = document.createElement('br');
      let br11Element = document.createElement('br');
      let br12Element = document.createElement('br');

      // this section is to create the html elements.
      let makeElement = document.createElement('div');
      let carElement = document.createElement('p');
      let priceElement = document.createElement('p');
      let hpElement = document.createElement('p');
      let originElement = document.createElement('p');
      let driveElement = document.createElement('p');
      let transElement = document.createElement('p');
      let engineElement = document.createElement('p');
      let weightElement = document.createElement('p');
      let zeroto60Element = document.createElement('p');
      let mpgElement = document.createElement('p');
      let torqueElement = document.createElement('p');
      let yearElement = document.createElement('p');
      let cylindersElement = document.createElement('p');
      let mphkphElement = document.createElement('p');
      let imageElement = document.createElement('img');


    // assigning classes.
    makeElement.className = 'box';
    carElement.className = 'name';
    footerElement.className = 'footeryes';

      // Makes the actual array display on the document.
      makeElement.textContent = myCar.mAKE;
      carElement.textContent = myCar.nAME;
      priceElement.textContent = myCar.price;
      hpElement.textContent = myCar.hp;
      originElement.textContent = myCar.origin;
      driveElement.textContent = myCar.drive;
      transElement.textContent = myCar.transmission;
      engineElement.textContent = myCar.engine;
      weightElement.textContent = myCar.weight;
      zeroto60Element.textContent = myCar.zeroto;
      mpgElement.textContent = myCar.MPG;
      torqueElement.textContent = myCar.torque;
      yearElement.textContent = myCar.year;
      cylindersElement.textContent = myCar.cylinders;
      mphkphElement.textContent = myCar.MPHandKPH;
      imageElement.src = myCar.image;


      // Creates the footer.
      footerElement.textContent = "allcarcards.com © All rights Reserved. Privacy Policy";
 

      // Appended Childeren, the order the elements appear.
      mainContainer.appendChild(makeElement);
      makeElement.appendChild(carElement);
      makeElement.appendChild(imageElement);

      makeElement.appendChild(br11Element);
      makeElement.appendChild(cylindersElement);

      makeElement.appendChild(br1Element);
      makeElement.appendChild(originElement);
      makeElement.appendChild(yearElement);

      makeElement.appendChild(br2Element);
      makeElement.appendChild(priceElement);

      makeElement.appendChild(br3Element);
      makeElement.appendChild(engineElement);

      makeElement.appendChild(br4Element);
      makeElement.appendChild(hpElement);

      makeElement.appendChild(br5Element);
      makeElement.appendChild(driveElement);

      makeElement.appendChild(br6Element);
      makeElement.appendChild(transElement);

      makeElement.appendChild(br7Element);
      makeElement.appendChild(weightElement);
      
      makeElement.appendChild(br12Element);
      makeElement.appendChild(mphkphElement);

      makeElement.appendChild(br8Element);
      makeElement.appendChild(zeroto60Element);

      makeElement.appendChild(br9Element);
      makeElement.appendChild(mpgElement);

      makeElement.appendChild(br10Element);
      makeElement.appendChild(torqueElement);
      
      makeElement.appendChild(br11Element);
      makeElement.appendChild(cylindersElement);

     
  });

  // You need this.
  document.body.appendChild(mainContainer);
  document.body.appendChild(footerElement);

  // console.log(allCars);