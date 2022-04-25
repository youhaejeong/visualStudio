//array/pritice2.js

let data = `[{"id":1,"first_name":"Stephannie","last_name":"Bassingham","email":"sbassingham0@comsenz.com","gender":"Female","ip_address":"169.84.5.49"},
{"id":2,"first_name":"Brynne","last_name":"Josefsohn","email":"bjosefsohn1@wunderground.com","gender":"Female","ip_address":"216.210.218.68"},
{"id":3,"first_name":"Aprilette","last_name":"Savory","email":"asavory2@scientificamerican.com","gender":"Female","ip_address":"227.56.12.76"},
{"id":4,"first_name":"Blanche","last_name":"Skerritt","email":"bskerritt3@howstuffworks.com","gender":"Female","ip_address":"20.84.152.6"},
{"id":5,"first_name":"Alidia","last_name":"Wingfield","email":"awingfield4@hhs.gov","gender":"Female","ip_address":"55.231.155.142"},
{"id":6,"first_name":"Cyrus","last_name":"Monkman","email":"cmonkman5@epa.gov","gender":"Male","ip_address":"213.132.75.237"},
{"id":7,"first_name":"Rogerio","last_name":"Perell","email":"rperell6@google.com.hk","gender":"Male","ip_address":"233.32.213.151"},
{"id":8,"first_name":"Marabel","last_name":"Lorman","email":"mlorman7@123-reg.co.uk","gender":"Female","ip_address":"47.42.183.12"},
{"id":9,"first_name":"Bellina","last_name":"Fagge","email":"bfagge8@devhub.com","gender":"Female","ip_address":"188.206.137.159"},
{"id":10,"first_name":"Catrina","last_name":"Bienvenu","email":"cbienvenu9@vinaora.com","gender":"Female","ip_address":"231.104.12.83"},
{"id":11,"first_name":"Gertruda","last_name":"Okroy","email":"gokroya@ox.ac.uk","gender":"Female","ip_address":"223.44.207.90"},
{"id":12,"first_name":"Raynell","last_name":"Postans","email":"rpostansb@live.com","gender":"Female","ip_address":"175.9.184.52"},
{"id":13,"first_name":"Westleigh","last_name":"O' Dooley","email":"wodooleyc@seesaa.net","gender":"Male","ip_address":"17.6.236.142"},
{"id":14,"first_name":"Boothe","last_name":"Dunstone","email":"bdunstoned@google.com.br","gender":"Male","ip_address":"197.94.174.201"},
{"id":15,"first_name":"Guthry","last_name":"Merner","email":"gmernere@irs.gov","gender":"Male","ip_address":"230.123.168.34"}]`

let objAry =JSON.parse(data); //문자열 =>object변환
//reduce () 누적시킬떄 사용 
console.log(objAry);
//tag를 누적시킴  //변수 선언 accum 
let result =objAry.reduce(function(accum,elem, ind){
// <ul> ~</ul>
if(ind == 0){
  accum +='<ul>'; //초기값에 누적시키기위해 +=함 ul태그 열때 인덱스 0부터 
}
accum +=`<li>id: ${elem['id']}, first_name: ${elem['first_name']} </li>`;
if(ind == objAry.length -1){ //ul닫을때 그 배열 길이의 마지막
  accum += '</ul>';
}
return accum; //다음순번의 초기값(계속 누적해서 tag생성 )
},''); //''는 문자열 초기값을 준것임 배열이 실행이 될떄 초기값으로 쓰겟습니다
//초기값이 없으면 없으면 첫번쨰 값과 두번째 값을 함쳐서 나옴 

document.write(result); //태그 값 