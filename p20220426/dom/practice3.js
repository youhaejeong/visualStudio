//p20220426 /dom/ practice3.js
let data = [{
  id: 101,
  name: '홍길동',
  age: 20
}, {
  id: 102,
  name: '장영실',
  age: 22
}, {
  id: 103,
  name: '고길동',
  age: 54
}];
document.addEventListener('DOMContentLoaded', callbackfunction);

function callbackfunction() {

  //변수선언 
  let table, tr, th, td, thead, tbody, text;
  //table 
  table = document.createElement('table'); //<table>
  table.setAttribute('border', 1); //<table border=1>

  //thead에 하위 요소를 작성한 다음 table 하위 요소로 추가
  thead = makeHead();
  table.appendChild(thead);

  tbody = makeBody(data);
  table.appendChild(tbody);

  //show 요소의 하위 table
  document.getElementById('show').appendChild(table);

  //추가 버튼 이벤트
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    let obj = {}
    let username = document.getElementById('userName').value;
    obj.name = username;
    let userage = document.getElementById('userAge').value;
    obj.age = userage;
    obj.id = 110;

    document.querySelector('table>tbody').appendChild(makeTr(obj));
  })

  //{김민수,25}
  let newObj = {
    id: 105,
    name: '김민수',
    age: 25
  }
  document.querySelector('table>tbody').appendChild(makeTr(newObj)); //테이블 밑의 티바디를 선택하여 makeTr함수를 이용해서 넣겠습니다

  // console.log(makeTr(newObj));
}

function makeHead() {
  //thead
  let thead = document.createElement('thead');

  let tr = document.createElement('tr');
  let th = document.createElement('th');
  let text = document.createTextNode('이름');
  th.appendChild(text); //<td>이름</td>
  tr.appendChild(th); //<tr><td>이름</td></tr>


  th = document.createElement('th');
  text = document.createTextNode('나이');
  th.appendChild(text);
  tr.appendChild(th);

  thead.appendChild(tr);

  return thead;
}

//makeTr 오브젝트를 하나 받아서 TR을 만들어줌
function makeTr(obj) {
  let fields = ['name', 'age'];
  //라인선언
  let tr = document.createElement('tr');
  tr.setAttribute('id', obj.id);
  //name,age 필드 만큼 td 생성
  fields.forEach(function (field) {
    let td = document.createElement('td');
    let text = document.createTextNode(obj[field] + `${field=="age"?"살":""}`); //값이 바뀔때 마다 새로 가져와야하므로 obj.name 대신에 obj[field] 사용
    td.appendChild(text);
    tr.appendChild(td);
  });

  return tr;

}

function makeBody(objAry) {

  //[{name,age},{},{}]
  //tbody
  let tbody = document.createElement('tbody');


  objAry.forEach(function (obj) {
    //obj => {name:'', age: }

    tbody.appendChild(makeTr(obj)) // 라인하나를 만들어주는 함수 
  });
  return tbody;
}