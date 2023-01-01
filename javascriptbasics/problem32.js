// Code 7 : Father has 5 fields. Son needs to put the seeds in decreasing order.
// Field 1 → 5 seed
// Field 2 → 4 seed
// Field 3 → 3 seed
// Field 4 → 2 seed
// Field 5 → 1 seed


 // for(let i = 1 ; i<=5 ; i++){
 //   let bag = ""
 //   for(let j = 5 ; j>=i ; j--){
 //     bag = bag + j
 //   }
 //   console.log(bag)
 // }

for(let i = 5 ; i>=1 ; i--){
  let bag = ""
  for(let j = 1 ; j<=i ; j++){
    bag = bag + i+"*"
  }
  console.log(bag)
}
































