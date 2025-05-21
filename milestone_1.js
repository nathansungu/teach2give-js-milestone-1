//sum of two numbers
function addition(num1, num2) {
  let sum = num1 + num2;

  console.log(sum);
}

//convert minutes into seconds

function convert(minutes) {
  let seconds = 60 * minutes;
  return seconds;
}
//perimeter of a rectangle

function findPerimeter(length, width) {
  let perimeter = 2(length * width);
  return perimeter;
}
//check negative
const isNegative = (number) => (number < 0 ? true : false);

//Check if allowed to drive
function checkIfCanDrive(name, age) {
  let message;
  if (age >= 18) {
    message = `${name} + is old enough to drive`;
  } else {
    message = `${name} + is not old enough to drive`;
  }
  return message;
}
console.log(checkIfCanDrive("lucy", 10));
//largest number

function largestNumber(num1, num2, num3) {
  let largestNumber;
  if (num1 > num2 && num1 > num3) {
    largestNumber = num1;
  } else if (num2 > num1 && num2 > num3) {
    largestNumber = num2;
  } else if (num3 > num1 && num3 > num2) {
    largestNumber = num3;
  } else {
    largestNumber = "all are equal";
  }
  return largestNumber;
}

//bmi calculator
const calculateBMI = (weight, height) => {
  let BMI = weight / (height * height);
  let category;

  if (BMI < 18.5) {
    category = "Underweight";
  } else if (BMI < 24.9) {
    category = "Normal weight ";
  } else if (BMI < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }
  let message = `Your BMI is ${BMI} - ${category}`;
};

//greeting based on time
function greetuser(name, hour) {
  let time;
  let greeting;

  if (hour >= 5 && hour <= 11) {
    time = "morning";
  } else if (hour >= 12 && hour <= 17) {
    time = "afternoon";
  } else if (hour >= 18 && hour <= 21) {
    time = "evening";
  } else {
    time = "night";
  }
  greeting = `Good ${time}, ${name}!`;
  return greeting;
}

//fizzbuzz
const fizzBuzzCheck = (number)=>{
    let modular3 = number% 3;
    let modular5 = number% 5;
    let fizzresut;

    if (modular3 ===0 && modular5 ===0) {
        
        fizzresut = "FizzBuzz";
    } else if(modular3 ===0){
        fizzresut = "Fizz";
    }else if(modular5 ===0){
        fizzresut = "Buzz";
    }else{
        fizzresut = number;
    }
    return fizzresut
}

//perimeter 2
function perimeter(shape,num ) {
    let shapePerimeter;
    if (shape==="s") {
        shapePerimeter = num*4;     
    } else if (shape ==="c") {
        shapePerimeter = (22/7)*(num*2)
        
    }else {
        shapePerimeter ="invalid shape"
    }

    
}

//sum of even numbers

function sumEvenNumbers(n) {
    let sum =0;
    for(let i=1; i<=n; i++){
        
        if (i%2 ===0) {
           sum = sum + i;
            
        }
            
    }
    return sum
    
}

//Multiply by itself

function poweUp(num, times) {
    if (times = false) {
        
        times = 0;
    }
    let powedvalue = (num**times);
    return powedvalue
    
}
//factorial calculator
function factorial(n) {
    if (n<0) {
        return "Enter positive values"    
        
    }else if (n===0) {
        return 1
        
    }else{
        return n*factorial(n-1)
    }
    
    
}
