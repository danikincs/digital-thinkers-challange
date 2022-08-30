import { IDriver } from "../interfaces/driver.interfaces";


//Function for loading and shuffling drivers
export default function loadJson() {

    let jsonData : IDriver[] = require('../assets/drivers.json');
    
    let shuffledDrivers = shuffle(jsonData);
    return shuffledDrivers;
}


//Shuffle drivers helper
function shuffle(array:IDriver[]) {
    let currentIndex : number = array.length;
    let randomIndex: number = 0;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [ array[currentIndex], array[randomIndex] ] = [ array[randomIndex], array[currentIndex] ];
    }
  
    return array;
  }