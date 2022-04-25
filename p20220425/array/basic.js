//array/basic.js

// 배열선언 : [] , enw Array();
let arr =[1,2];
let newAry=[3,4,5,6];

//추가 :push : 마지막 위치, unshift : 첫번쨰 위치 
arr.push(3);
console.log(arr.toString());
arr.unshift(0);
console.log(arr.toString());

//제거: pop(),shift();
arr.pop();
console.log(arr.toString());
arr.shift();
console.log(arr.toString());

//forEach
newAry.forEach(function(elem){
  arr.push(elem);
});
console.log(arr.toString());
newAry.forEach(function(elem){
  arr.unshift(elem);
});
console.log(arr.toString());

arr.pop();
console.log(arr.toString());
arr.pop();
console.log(arr.toString());
arr.shift();
console.log(arr.toString());

//splice() :배열에 추가 수정 삭제 가능 
//splice(위치,크기,대체값)
arr.splice(1,2,8,9); //첫번째 위치에서 2개의 크기 만큼을 8,9로 바꾸겟습니다.
console.log(arr.toString());
arr.splice(1,1,8,9); 
console.log(arr.toString());
arr.splice(1,0,8,9); //추가
console.log(arr.toString());
arr.splice(1,2);  //삭제
console.log(arr.toString());


newAry.forEach(function(elem){
 arr.splice(1,0, elem);
});
console.log(arr.toString());

let names =[];
let anonym='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quod, temporibus sit maxime ratione voluptatum saepe nam pariatur dolore, cumque neque. Temporibus voluptatibus incidunt porro veritatis non culpa quibusdam exercitationem.';
anonym.split(' ').forEach(function (elem){
  names.push(elem);
});
console.log(names.toString()); //배열 요소 하나하나를 보여줌 ex )배열,배열,배열
console.log(names); //배열 요소 하나하나를 보여줌 ex )배열,배열,배열

// forEach() :반환 안함
//  map() :각 요소 => mapping 작업(다른형태 반환)
// filter() : return 조건을 만족하는 값만 반환 
let result =names.map(function(elem){
  return elem.toUpperCase();
}); //새로운 배열 

result=result.filter(function (elem){
  return elem.length >=10;
})

result=names//
.map(elem => {
  let res =elem.toUpperCase();
return res;
})//
.filter(elem =>elem.length >=10); //chain rules
console.log(result);