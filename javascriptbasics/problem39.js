// Problem 1: Print the Calendar date in the below format
// 1-1
// 2-1
// 3-1
// .
// .
// .
// .
// .
// 31-1
// .
// .
// .
// .
// .
// 31-12

let day=0;
for(let m=1; m<=12; m++){

  if(m==2){
    day= 28;
  }
  else if(m== 4 || m==6 || m==9 || m==11){
    day=30;
  }
  else{
    day=31;
  }
  
  for(let d=1; d<=day; d++){
    console.log(d+"-"+m);
  }
}