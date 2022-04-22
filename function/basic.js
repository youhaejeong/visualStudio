//function / basic.js
//타입이 의미 없음 
//function이란 키워드로 선언하면됨 
//리턴 구문이 있으면 반환 받겠습니다! 
//return이 없으면 변수가 있더라도 반환하지 않음 
//아래의 function sum(num1, num2)는 let sum=function(num1,num2) 라는 뜻임
//1. 함수는 함수 선언식으로 정의 (정통식 )
function sum(num1, num2) {
 console.log(num1,num2);
 return num1 + num2;
}
// 값을 안넣으면 undefined 상태로 둠 
// sum();
sum(10,20);
//=>let sum = function(num1,num2){}
let result = sum(10,20,30);
console.log('결과는 ' +result)
//2.함수표현식으로 정의 
let myfnc =function (val1,val2) {
  var myVal = 10;
  return val1 + val2 +myVal;
}
console.log(typeof myfnc,myfnc);
result = myfnc(10,20);
console.log(result);
//sum 이라는 변수는 이미 위에서 선언되었기 떄문에 아래의 구문은 오류가남 
// let sum =myfnc;
//자바의 메소드 기능이라 생각하면 편함 
let mysum =myfnc;
result=mysum(20,30);
console.log(result);

const person = {
  fullName :'Hong',
  age : 20,
  height :175.3
}
const person1 ={
  fullName :'Hwang',
  age : 22,
  height :178.4
}
const person2 ={
  fullName :'Park',
  age : 25,
  height :165.3
}
//함수 안에서는 var라 형태 지정 
//함수 표현식 myinfo.
let myinfo = function(obj){
  var info = `${obj.fullName}이고 ${obj.age}살이고
  키는 ${obj.height}입니다.`;
  return info;
}

result = myinfo(person);
console.log(result);
console.log('-------------');
//배열을 활용하여 출력 //자바스크립트에서는 배열을 활용한것이 굉장히 많음 
const persons =[person, person1, person2];
for(let person of persons){
  let result = myinfo(person);
  console.log(result);
}
console.log('-------------');
//배열에 정의된 갯수만큼 실행하겠슴다.
//콘솔을 깰꼼하게 하겠습니다.
console.clear();
//자바스크립트에서는 문자열,숫자,boolean,배열 을 모두 매개값으로 사용 가능 
//함수를 매개변수로 사용가능 .
let funcParam =function(val,ind,ary){
  console.log(myinfo(val));
}
//함수를 따로 변수로 선언하여 사용 
persons.forEach(funcParam); //메소드의 매개값으로 활용 되는 함수 =>콜백함수 
console.log('-------------');
persons.forEach(function(val,ind,ary){
  // console.log(val,ind,ary);
  console.log(myinfo(val));
});
console.log('-------------');
//화살표 함수 /람다식처럼 
let funcPara =(val,ind,ary) =>{ 
  console.log(myinfo(val));
}

//배열과 같이 사용
//배열인 경우에만 forEach사용가능 
//forEach는 꼭 기억하기 

