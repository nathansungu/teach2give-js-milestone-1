// basic Data Structures
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