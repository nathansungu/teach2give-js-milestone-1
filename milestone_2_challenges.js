// basic Data Structures

//sum of positives valu in array
const sumOfPositives = (array) => {
  let sum = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    if (array[i] > 0) {
      sum += array[i];
    }
  }
  return sum;
};

console.log(sumOfPositives([1, -4, 6]));

//maximum value
const findMax = (array) => {
  var maximum = array[0];
  for (let i = 1; i <= array.length - 1; i++) {
    if (array[i] > maximum) {
      maximum = array[i];
    }
  }
  return maximum;
};
console.log(findMax([10, 7, 2, 9, 5]));

//Election winner
const findWinner = (object) => {
  let winner = object[0];

  for (let i = 1; i <= object.length - 1; i++) {
    if (object[i].votes > winner.votes) {
      winner = object[i];
    }
  }
  return winner;
};
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 95 },
];
console.log(findWinner(candidates));

//longest word

const finLongestWord = (array) => {
  let longest = array[0];
  for (i = 1; i <= array.length - 1; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];
    }
  }
  return longest;
};

console.log(
  finLongestWord(["apple", "banana", "grapefruil", "pear", "grapefruit"])
);

//count properties

const countProperties = (object) => {
  let count = 0;

  for (key in object) {
    if (object.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
};
console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }));

//filter by length

const filterByLength =(array, minLength)=>{

    let newArray =[];
    for(let i=0; i<=array.length-1; i++){
        if (array[i].length<=minLength) {
            newArray.push(array[i])            
        }
        
    }
    return newArray

}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5))