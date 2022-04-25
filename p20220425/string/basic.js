//string /basic.js
//문자열과 문자열 객체

let str1= '문자열';
console.log(typeof str1);

let str2= new String('문자열'); //new 라는 키워드로 생성된 오브젝트.
console.log(typeof str2);

console.log(str1 == str2) //비교연산자 ==값을 비교할떄 
console.log(str1===str2); //비교연산자 === 값& 타입 모두 비교 값이 같지만 타입이 달라서 false 반환 

let result = str1.substring(0,2); //index:0 ~ index:2까지 잘라내기.
console.log(result);

result = str2.substr(0,2); //index:0 크기 2만큼 잘라내기
console.log(result);

const cal1 = '1+2*3'; //String 타입문자열이라서 계산은 안됨
const cal2 = new String('1 + 2 * 3');//oㅠject 타입

//eval ():문자열 =>수식변경
console.log(eval(cal1)); // 1 + 2 * => 7
console.log(eval(cal2)); // object 
console.log(eval(cal2.valueOf())); // object  => 1 + 2 * 3 => 7 //오브젝트타입을 문자열로 반환하고 그것을 계산하겠습니다
//valueOf() 문자열로 바꾸겠습니다.

//trim() : 좌우의 여백을 잘라내기
console.log('   문자열 공백 테스트    '.trim());
console.log('   문자열 공백 테스트    '.trimStart()); //왼쪽의 공백만 잘라내겠습니다.
console.log('   문자열 공백 테스트    '.trimEnd()); 
console.log('   문자열 공백 테스트    '.trimStart().trimEnd()); //왼쪽 여백과 오른쪽 여백을 잘라내겠습니다.

// 문자열의 공백을 제거. //함수를 따로 만들어야함 
result =' 문자열 공백 테스트 '.split(' ');//매개값을 기준으로 문장을 잘라서 배열
result = result.filter(function(val){ //안에 어떤 함수가 들어오냐에따라 배열의 각 요소의 true =>배열 반환함 
  return val; //['','문자열','공백','테스트',''] 가 있엇음 공백이나 널은 flase를 반환함 
}); //false값을 제외한 true값만 반환 
console.log(result);
console.log(result.join(''));


//자바스크립트 boolean 값:null, '' ,0 ,undefined =>false 값을 반환함 
if(!null){ //null => false 라는 의미  !붙이면 not이라는 의미 
  console.log('false값.')
}

if('문자열'){ //반환되면 true값
  console.log('false값.')
}

result = ' 문자열 공백 테스트 '.split(' ').filter(val => val).join(',');
//화살표 함수 사용시 반환이 하나만 되면 return 생략가능 ','는 구분자로 사용 
console.log(result);

//slice, substring , stbstr(Deprecated) ;
console.log('안녕하세요 반갑습니다.'.slice(0,6));//인덱스값을 기준으로 0~5 잘라내어 새로운 값 반환//인덱스값으로 0부터 5까지인데 뒤쪽 인덱스값을 제외하고 반환 
console.log('안녕하세요 반갑습니다.'.slice(0,-6));//마이너스 음수값을 가질수있음 마이너스가 들어가면 뒤에서부터
console.log('안녕하세요 반갑습니다.'.substring(0,6));
console.log('안녕하세요 반갑습니다.'.substr(2,3)); //인덱스값이 2부터 크기 3만큼 잘라내겠습니다.

//toString() : 문자열로 변환 
let num1 = 123;
console.log(typeof num1);
num1 = num1.toString();
console.log(typeof num1);

true.toString();// 'true'라는 문자열 반환

let obj ={
  key: 'Hong',
  value: 15
}
console.log(obj.toString()); //오브젝트 타입은 투스트링으로 변환 안됨
console.log(obj.key.toString());
console.log(obj.value.toString()); //숫자로 반환되더라도 콘솔창에서 검정색으로 나오면 문자값임 

