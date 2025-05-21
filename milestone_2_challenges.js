// basic Data Structures

//sum of positives valu in array
const sumOfPositives =(array)=>{
    let sum =0;
    for( let i=0; i<=array.length-1; i++){
        if (array[i]>0) {
            sum+=array[i];            
        }
    }
    return sum
}

console.log(sumOfPositives([1,-4,6]))

//maximum value
const findMax =(array)=>{
    var maximum = array[0];
    for (let i = 1; i < array.length-1; i++) {        
        if(array[i]>maximum){
            maximum =array[i];
        }      
    }
    return maximum
}
console.log(findMax([10, 7, 2, 9, 5]))