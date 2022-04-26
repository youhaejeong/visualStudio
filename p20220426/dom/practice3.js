//p20220426 /dom/ practice3.js
//dom중 최상위에 존재하는것 window
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
console.log(window);
window.document.children[0] //=>html
window.document.children[0].children[1] //=>body
window.document.children[0].children[1].children[0].innerHTML='요기요'; //h3

let h3 =window.document.children[0].children[1].children[0];
let newH3= document.createElement('h3');
newH3.innerHTML ='여기요';
h3.parentElement.appendChild(document.createElement('h3')); //append 하면 바디태그 젤 밑에 붙음

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

  th = document.createElement('th');
  text = document.createTextNode('기능');
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
  let btn = document.createElement('button'); //<button> 삭제 </button>
  btn.innerHTML = '삭제';
  btn.addEventListener('click', deleteCallBack) ;
    // console.log(this); //event.target //이떄 this는 이벤트 대상을 가르킴 
    // this.parentElement.parentElement.remove();
    // // evnt.target.parentElement.parentElement.remove(); //버튼태그  //중요함 ;
  let td = document.createElement('td');

  td.appendChild(btn);
  tr.appendChild(td);

  return tr;

}

function deleteCallBack() { //evnt 로 하고싶을때 deleteCallBack()안에 evnt를 넣으면 할수잇ㅁ음
  // evnt.target.parentElement.parentElement.remove(); //버튼태그  //중요함 
  console.log(this); //event.target //이떄 this는 이벤트 대상을 가르킴 
  this.parentElement.parentElement.remove();
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