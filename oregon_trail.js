(function () {

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }
//Traveler Blueprint
  function Traveler(name, food, isHealth) {
    this.name = name;
    this.food = food;
    this.isHealth = isHealth;
  }

  //New traveler instance
  function makeTraveler(name) {
    return new Traveler(name, getRandomIntInclusive(0,100), true);
  }

  //Hunt function
  function hunt(traveler) {
    if (Math.random() >.5) {
      traveler.food += 100;
    }
    return traveler.food
  }

  //Eat function
  function eat(traveler) {
    if (traveler.food < 20){
      traveler.isHealth = false;
    }
    else {
      traveler.food -= 20;
    }
    return traveler.isHealth;
  }

  //Wagon Blueprint
  function Wagon(passengers,capacity) {
    this.passengers = passengers;
    this.capacity = capacity;
  }

  //New wagon instance
  function makeWagon(capacity) {
    return new Wagon([], capacity)
  }

  //Join wagon function
  function join(wagon, traveler) {
    if (wagon.passengers.length < wagon.capacity) {
      wagon.passengers.push(traveler);
    }
  }

  //Quarantine function
  function quarantine(wagon) {
    for (let passenger of wagon.passengers){
      if (passenger.isHealth == false) {
        return true;
      }
      else {
        return false;
      }
    }
  }
  //total food count
  function food(wagon) {
    let food_total = 0
    for (let i=0; i < wagon.passengers.length; i++){
      food_total += wagon.passengers[i].food
    }
    return food_total;
  }



  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');

  console.log(wagon);
  console.log(traveler);
  console.log(traveler2);
  //corresponding console for hunt function
  hunt(traveler);
  console.log(traveler);
  //corresponding console for eat function
  eat(traveler2);
  console.log(traveler2);
  //corresponding console for eat function
  eat(traveler2);
  console.log(traveler2);
  //corresponding console for join1 join2 function
  join(wagon, traveler)
  console.log(wagon);
  join(wagon, traveler2);
  console.log(wagon);
  ////corresponding console for quarantine function
  console.log(quarantine(wagon));
  //corresponding total food function
  console.log(food(wagon));




})()
