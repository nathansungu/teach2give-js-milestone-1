//sum of two numbers
function addition(num1, num2) {
    let sum = num1+num2;
   
    console.log(sum)
            
}

//convert minutes into seconds

 function convert(minutes) {
    let seconds =   60*minutes  
    return seconds
 }
 //perimeter of a rectangle

 function findPerimeter(length, width){
    let perimeter = 2(length*width);
    return perimeter;
 }
 //check negative
 const isNegative =(number)=> (number<1? true: false)

 //Check if allowed to drive
 function checkIfCanDrive (name, age){
    let message;
    if (age>=18) {
       message = name + " is old enough to drive"        
    } else {
        message = name + " is not old enough to drive"
    }
    return message
 }

 //largest number

 function largestNumber(num1, num2, num3) {
    let largestNumber;
    if (num1>num2 && num1 >num3) {

        largestNumber =num1;
    }else if(num2>num1&&num2>num3){
        largestNumber = num2;
    }else if (num3>num1&&num3>num2){
        largestNumber =num3;
    }
    return num3
    
    
 }
 

 

