//p20220426 /dom /practice1

//엘리먼트 머그를 만드는 작업 element node(태그라고 생각 )

document.addEventListener('DOMContentLoaded', function () {
  let first = document.createElement('li')
  first.innerHTML = '아이스아메리카노'
  let second = document.createElement('li')
  second.innerHTML = '까페라떼'
  let third = document.createElement('li')
  third.innerHTML = '레몬에이드'
  console.log(first);
  console.log(second);
  console.log(third);

  let List = document.createElement('ul')
  List.appendChild(first);
  List.appendChild(second);
  List.appendChild(third);
  console.log(List)
  //화면에 출력 
  let one = document.getElementById('show');
  //이상태일떄는 SHOW의 값이 뭔지 몰라서 null로 콘솔이 오류남 
  console.log(one);
  one.appendChild(List);
});


//배열사용 
document.addEventListener('DOMContentLoaded', function () {
  let menus = ['아이스아메리카노', '카페라테', '레몬에이드']
  let ulTag = document.createElement('ul')
  for (let i = 0; i < menus.length; i++) {
    let liTag = document.createElement('li');
    liTag.innerHTML = menus[i];
    ulTag.appendChild(liTag);
  }
  let divShow = document.getElementById('show');
  divShow.appendChild(ulTag);

})

//forEach 사용해서
document.addEventListener('DOMContentLoaded', function () {
  let menus = ['아이스아메리카노', '카페라테', '레몬에이드']
  let ulTag = document.createElement('ul')
  menus.forEach(function(menus, idx) {
    let liTag = document.createElement('li');
    liTag.innerHTML = menus;
    ulTag.appendChild(liTag);
  })
  let divShow = document.getElementById('show');
  divShow.appendChild(ulTag);

});

// document.addEventListener('DOMContentLoaded',function(){
//   let ulTag =document.createElement('ul');
//   let liTag = document.createElement('li');
//   liTag.innerHTML ='아이스아메리카노';
//   ulTag.appendChild(liTag);

//   liTag = document.createElement('li');
//   liTag.innerHTML ='카페라떼';
//   //하위요소 추가
//   ulTag.appendChild(liTag);

//   liTag = document.createElement('li');
//   liTag.innerHTML ='레몬에이드';
//   //하위요소 추가
//   ulTag.appendChild(liTag);

//   console.log(ulTag);

//   let divShow=document.getElementById('show');
//   divShow.appendChild(ulTag);

// })