//paratice2.js
//기본형 숫자타입 
const num1 = 10;
//{} 는 object 참조타입의 변수 //instance라고 생각하면 편함 
const person1 = {
  fullName: 'Hong',
  age: 20,
  height: 175.3
}
const person2 = {
  fullName: 'Hwang',
  age: 22,
  height: 178.4
}
const person3 = {
  fullName: 'Park',
  age: 25,
  height: 166.3
}
//위치를 가리키고 있음 둘중 하나라도 바껴도 다 바뀜 
// const person4=person1
////////////////////////////////////////////////////////////////
const persons = [person1, person2, person3];
//object선언 배열선언 아님 

// for(let person of persons){

// }
//위의 포문과 아래의 폴이치문이 같은 거임 같은 반복문 선언 
// persons.forEach();
let avgAge = 0;
let sum = 0;
for (let person of persons) {
  sum += person.age;
}
avgAge = sum / persons.length;
console.log(`평균나이: ${avgAge}`)

console.log(`-------------------`);
let avgAgeFnc = function (val) {
  sum += val.age;
};
let avgHeightFnc = function (val) {
  sum += val.height;
}
sum = 0;
//forEach() 안에 어떤 기능을 넣느냐에 따라 가져오는 결과 값이 달리짐 
persons.forEach(avgHeightFnc);
avgAge = sum / persons.length;
console.log(`평균키: ${avgAge}`)
//어떤 기능을 써서 어떤 것을 가져오겠느냐

let tag = "";
// * 이름,나이,키 출력
// * 이름,나이,키
// * 이름,나이,키
//형식으로 
let allperson = function (val, idx) {
  if (idx == 0) {
    tag += '<ul>';
  }
  tag += `<li> ${val.fullName}, ${val.age},${val.height} </li>`;
  if (idx == persons.length - 1) { //마지막 태그는 배열만큼만 하는것이기때문에 배열은 0부터 시작이여서 -1을 해줌
    tag += '</ul>';
  }
};

let over170 = function (val,idx) {
if(idx == 0){
  tag += '<ul>';
}
if(val.height >= 170)
tag += `<li> ${val.fullName}, ${val.age},${val.height} </li>`;
if (idx == persons.length - 1) { 
  tag += '</ul>';
}
}
persons.forEach(over170);
// console.log(tag);
// document.write(tag);

persons.forEach(function (val, idx) {
  if (idx == 0) {
    tag += '<ul>';
  }
  tag += `<li> ${val.fullName}, ${val.age},${val.height} </li>`;
  if (idx == persons.length - 1) { 
    tag += '</ul>';
  }
});
console.log(tag);
document.write(tag);
