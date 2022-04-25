//string/basic3.js
//'hello',"hello",`hello` => 문자열  ``을 쓰면 변수를 쓸수있음 
let str1 ='hello';

console.log(`${str1}`);
let str2 = `Welcome
to my home,
This is house.
`;
console.log(str2);
str2="WElcome \n to my home \n THis my house."
console.log(str2);

let age = 22;
//에이지라는 값이 20살이 넘으면 성인 그렇지 않으면청소년이라 반환 
console.log(`${age >=20?'성인':'청소년 '}`);
