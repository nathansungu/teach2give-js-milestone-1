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
    message = name + " is old enough to drive";
  } else {
    message = name + " is not old enough to drive";
  }
  return message;
}

//largest number

function largestNumber(num1, num2, num3) {
  let largestNumber;
  if (num1 > num2 && num1 > num3) {
    largestNumber = num1;
  } else if (num2 > num1 && num2 > num3) {
    largestNumber = num2;
  } else if (num3 > num1 && num3 > num2) {
    largestNumber = num3;
  }else{
    largestNumber= "all are equal"
  }
  return largestNumber;
}

//bmi calculator
const calculateBMI = (weight, height) =>{
    let BMI = weight/(height*height)
    let category;

    if (BMI<18.5) {
         category = "Underweight"
    } else if (BMI<24.9) {
            category = "Normal weight "  
    }else if (BMI<29.9) {
        category = "Overweight"        
    }else{
        category = "Obese"
    }
    let message = `Your BMI is ${BMI} - ${category}`
    
}

//



