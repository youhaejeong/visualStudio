//object/practice
const jsonObj =
  `[{"id":1,"first_name":"Stephannie","last_name":"Bassingham","email":"sbassingham0@comsenz.com","gender":"Female","ip_address":"169.84.5.49"},
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

//json 문자열 =>javascript 오브젝트로 변경

const objAry = JSON.parse(jsonObj);
console.log(objAry); // id: ?, first_name:?,last_name:?

let fields = ['id', 'first_name', 'last_name', 'email'];

function showTable(ary) {
  let tableTag = "";
  //<table>
  // <thead><tr><th></th>*항목갯수*</tr></thead>
  // <tbody><tr><td></td>*항목갯수</tr>*건수</tbody>
  // </table>

  tableTag += '<table>';
  tableTag += createHead();
  tableTag += createBody(ary);
  tableTag += '</table>';


  document.write(tableTag);

}

function createHead() {
  // <thead><tr><th></th>*항목갯수*</tr></thead>
  let headTag = "";
  headTag += '<thead><tr>';
  fields.forEach(function (val) {
    headTag += `<th> ${val}</th>`;
  });
  headTag += '</tr></thead>';
  console.log(headTag);
  return headTag;


}
//배열이 대괄호 오브젝트 중괄호 문자 큰따옴표
function createBody(ary) {
  // <tbody><tr><td></td>*항목갯수</tr>*건수</tbody>
  //여기서 필드는 id같은것들
  //val은 첫번째 데이터 두번째데이터,,,
  let bodyTag = "";
bodyTag +='<tbody>';
ary.forEach(function (val,idx){
  bodyTag +=`<tr style="background-color:${idx%2==0?'rgb(184, 92, 221)':'rgb(70, 230, 195)'};">`;
  fields.forEach(function(field){
    bodyTag +=`<td>${val[field]}</td>`;
  });
  bodyTag +='</tr>';
});
bodyTag +='</tbody>';
console.log(bodyTag);
return bodyTag;
}
showTable(objAry);