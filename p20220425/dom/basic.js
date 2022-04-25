// dom /basic.js

//DOM :생성 속성 삭제 부모-자식 관계 설정 
// addEventListener('이벤트이름','실행할 이벤트 핸들러')
//이벤트가 발생되는것을 듣고있겟다 =>이벤트를 등록하겠다
// 실행순서 1 -> 3 -> 2 페이지를 처음부터 끝까지 읽고 난 후에 실행 
//이벤트 관련 내용 
console.log('1');
document.addEventListener('DOMContentLoaded',function (){
  console.log('2');
  let h3Tag =document.getElementsByTagName('h3')//가져 오건 안가져오건 HTMLCollection
   //태그 이름을 읽어오겟다 h3라는 태그를 읽음 
console.log(h3Tag);

h3Tag[1].innerHTML ='content changed';

let first=document.getElementById('first'); //element
console.log(first);
first.innerHTML ='Git test';


let second =document.getElementsByClassName('first');
second[0].innerHTML ='사과';

//CSS의 선택자로 할수있음 h3 > div
let list=document.querySelector('ul>li'); //ul태그 밑의 자식으로 li를 가져오겠음 //만족하는거 한건만 리턴
console.log(list);
list=document.querySelectorAll('ul>li'); //다 리턴
console.log(list);
list[0].style.backgroundColor='yellow';
list[1].style.backgroundColor='pink';


//DOM 생성
let newList = document.createElement('li'); //li라는 태그를 생성함// <li>Mango</li>
newList.innerHTML ='Mango';

console.log(newList);


//ul태그 하위요소<li>Manga</li> 
let ulTag =document.querySelector('ul');
ulTag.appendChild(newList);


});
console.log('3');