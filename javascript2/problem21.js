// Print the average of even numbers from 1 to 100 (both included)
// Submission Link

let i = 0
let sum = 0
let count = 0
while(i<=100){
  if(i%2==0){
    sum = sum+i
    count =count+1;
  }
  i++
}
console.log(sum/count)