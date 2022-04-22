//paratice3.js
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


const persons = [person1, person2, person3];
//map 맵핑작업 return 안하면 undefined을 return 해줌 
const newPersons = persons.map(function (val, idx) {
  let newObj = {}; //아무필드가없는 오브젝트 선언 //오브젝트 타입 선언.
  //선언한것에 속성을 입력 
  //오브젝트의 속성(필드)를 추가
  newObj.index = idx + 1;
  newObj.fName = val.fullName;
  newObj.age = val.age;
  newObj.height = val.height;

  return newObj;
});
//return하고싶은 값을 넣으면 이렇게 리턴 됨
console.log(newPersons);

// 함수....
function tableList(personAry) {
  document.write('<table border=1>');
  document.write('<caption>목록</caption>')
  document.write('<tr><th>번호</th><th>이름</th><th>나이</th><th>키</th></tr>')
  for (let person of personAry) { //line 생성
    document.write('<tr>');
    for(let field in person){ //칼럼생성
        document.write(`<td>${person[field]}</td>`);
      }
    document.write('</tr>');
  }
  document.write('</table>');
}
//함수 정의한것을 실행(호출) 실행 구문이 없으면 안만들어짐 
tableList(newPersons);