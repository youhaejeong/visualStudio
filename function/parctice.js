//practice.js
const numbers = [23, 45 ,32, 55, 34, 72];
let sum = 0;

//원래 했던 방식임
for(let i=0; i<numbers.length; i++){
  sum += numbers[i];
}
sum=0;
for(let number of numbers) {
  if(number % 2 == 0) {
    sum +=number;
  }
}
console.log('합: '+sum);

// let sum = 0;
// 각 요소들 마다 각각 실행할 
// 함수 표현식으로 
// += --> 값을 모두 더함
//짝수를 구하는것은 나누기 2했을때 0이 나와야함  
let evenSum = function(param){
  if(param % 2 == 0) {
    sum +=param;
  }
};
console.log('------------------------');
evenSum = (param,idx) =>{
  console.log(param,idx);
  if(param % 2 == 0) {
    sum +=param;
  }
};
console.log('------------------------');
let oddSum = (param,idx) =>{
  console.log(param,idx);
  if(param % 2 == 1) {
    sum +=param;
  }
};
// 값중에서 짝수값먼 더하는걸로 
// 배열로 처리할수있게 

console.log('------------------------');
numbers.forEach(evenSum);
console.log('합: '+sum);
numbers.forEach(function(param){
  if(param % 2 == 0) {
    sum +=param;
  }
});
console.log('합: '+sum);
console.log('------------------------');
numbers.forEach((param,idx) =>{
  console.log(param,idx);
  if(param % 2 == 0) {
    sum +=param;
  }
});
console.log('합: '+sum);
console.log('------------------------');
 evenSum = (param) => {
  if(param % 2 ==0){
    sum += param;
  }
};
console.log('합: '+sum);
console.log('------------------------');

