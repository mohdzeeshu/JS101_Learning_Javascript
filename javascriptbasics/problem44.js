// Given an array find the unique items in the array

let arr = ["zeeshan","alam","aftab","zahid","zeeshan","parvez","Rahul","Dhoni","zeeshan","alam","Dhoni"]
let obj = {}

for(let i = 0 ; i<=arr.length-1 ; i++){
  if(obj[arr[i]]==undefined){
    obj[arr[i]] = 1
  }
}
console.log(obj)