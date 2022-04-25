//p20220425 / dom/practice.js
document.addEventListener('DOMContentLoaded', function () {
  //페이지를 다 읽은 후에 하겠습니다
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    //사용자가 입력한 값을 알아야함 
    //입력값1, 입력값 2 버튼을 누를 때 누적 시킴?
    let name = document.getElementById('userName').value;
    let age = document.getElementById('userAge').value;

if(!name){
  alert('이름을 입력하세요....');//alert
  return;
}
if(!age){
  alert('나이를 입력하세요..');
  return;
}
    let span1 = document.createElement('span'); //요소를 만들때 createElement //<span>${name}</sapn>
    span1.innerHTML = name;
    let span2 = document.createElement('span'); //<span>${age}</sapn>
    span2.innerHTML = age;
    let div1 = document.createElement('div');
    div1.appendChild(span1); //<div><span></span></div> div하위에 스팬을 만들겠음 
    div1.appendChild(span2); //<div><span>홍길동</span><span>20</span></div>

    document.getElementById('show').appendChild(div1); //화면출력 
  })
})