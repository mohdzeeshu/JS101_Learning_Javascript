// PROBLEM 3
// Problem 3 : Given an array of numbers find the average of all the even numbers.
// Submission Lin

let arr = [1,2,3,4,5,6,7,8,9]
let count = 0
for(let i = 0 ; i<=arr.length-1; i++){
  if(arr[i]%2==0){
    count++
  }
  
}
let avg = count/arr.length
console.log(avg)