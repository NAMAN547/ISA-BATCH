

let str = " abcd accb dcab bbca";

let obj = {};

for(let i of str){

   if(!obj[i]){

    obj[i] = 1;

   }
   else{
    obj[i] = obj[i] + 1;

   }
}
delete obj[" "];

console.log(obj)