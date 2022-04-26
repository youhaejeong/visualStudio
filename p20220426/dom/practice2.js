//p20220426 /dom/ practice2
//엘리먼트 노드와 텍스트 노드 구분 

document.addEventListener('DOMContentLoaded', function () {
  let divTag = document.createElement('div');
  let spanName = document.createElement('span');
  spanName.setAttribute('id','name');
  // spanName.innerHTML ='홍길동'; //<span>홍길동</span>
  let name = document.createTextNode('홍길동');
  //부모자식으로 만듬
  spanName.appendChild(name); //<span>홍길동</span>


  let spanAge = document.createElement('span');
  spanAge.setAttribute('class','age'); //attribute노드 추가 
  // spanAge.innerHTML = '20살' //<span>20살</span>
  let age = document.createTextNode('20살');
  spanAge.appendChild(age);

  let hypen=document.createTextNode(' - ');

  // divTag.innerHTML = ' - ';

  divTag.appendChild(spanName);
  divTag.appendChild(hypen);
  divTag.appendChild(spanAge);

  let divShow = document.getElementById('show').appendChild(divTag);

  // divShow.appendChild(divTag)
  //span 은 태그이기떄문에 엘리먼트 노드 홍길동은 text이기 때문에 텍스트 노드
  //각각 모든게 노드가 됨
  
  //어트리뷰트
//attribute노드 추가 .setAttribute('이름','속성')
})