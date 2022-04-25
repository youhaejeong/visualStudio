//string /basic2.js

//indexOf(),lastIndexOf() :찾을 문자열의 위치인덱스 반환 //없으면 -1 반환
let result = '안녕하세요 홍길동입니다. 대구의 홍길동입니다'.indexOf('홍길동');
console.log(result);
result = '안녕하세요 홍길동입니다. 대구의 홍길동입니다'.indexOf('홍길둥');
console.log(result);
result = '안녕하세요 홍길동입니다. 대구의 홍길동입니다'.lastIndexOf('홍길동');
console.log(result);
result = '안녕하세요 홍길동입니다,서울의 홍길동, 대구의 홍길동입니다'.indexOf('홍길동', 15); //어떤 위치부터 찾고싶을떄 두번째 매개값을 주면됨 
console.log(result);
let str1 = '안녕하세요 홍길동입니다,서울의 홍길동,부산의 홍길동, 대구의 홍길동입니다';
let position = str1.indexOf('부산'); //'부산'의 위치인덱스 반환 
result = str1.indexOf('홍길동', position);
console.log(result);

//charAt(인덱스) : 인덱스 위치의 문자 반환 /인덱스를 넣으면 해당되는 값의 위치를 리턴?
let str2 = str1.charAt(result);
console.log(str2);

//toLowerCase(), toUpperCase :문자를 소문자/대문자 로 변경
let str3 = 'Lorem, ipsum dolor sit amet DOLOR consectetur adipisicing elit. Aspernatur consequatur';
console.log(str3.toUpperCase());
console.log(str3.toUpperCase().toLowerCase());

//inclides('찾을 문자열') :있으면 true/ 없으면 false 
result = str3.includes('dolor');
console.log(result);
result = str3.includes('dolors');
console.log(result);

//search('찾을 문자열') 추가기능:search(정규표현식); 찾을 문자열의 인덱스를 반환 
result = str3.search('dolor');
console.log(result); //위치값 반환 
result = str3.search('DOLOR');
console.log(result); //소문자 대문자 일치 필요함 찾지 못하면 -1반환
result = str3.toUpperCase().search('DOLOR');
console.log(result); //문자를 일치시키면찾을수 있음 
//정규표현식 오브젝트 '/ /'(new RegExp), 배열은 [] (new Array())
result = str3.toUpperCase().search('DOLOR');
result -str3.search(/DOLOR/);
console.log(result);
console.log('---------')
result = str3.toUpperCase().search('DOLOR');
result -str3.search(/dolor/ig);
console.log(result);

//match('찾을 문자열') :찾으면 문자열 반환 못찾으면 null반환
let str4 ='bad MORNING, GOOD AFTERNOON, good evening, and good night';
result = str4.match('good');
console.log(result);
console.log('---------')
result = str4.match(/good/gi); //g :여러개 다 찾음 
console.log(result);
console.log('---------')
result = str4.match(/goods/gi);
console.log(result);
console.log('---------')
result = str4.match(/good\s\w+/gi); // \s : 공백. \w : 문자하나. +는 1개이상있습니다.
console.log(result);

//replace('찾을 문자열','바꿀 문자열');
console.log('---------')
result =str4.replace('good','better'); //첫번째 값만 바꿔줌
console.log(result);
console.log('---------')
result =str4.replace(/good/g,'better');
console.log(result);
console.log('---------')
result =str4.replace(/good/ig,'better');
console.log(result);
console.log('---------')
result =str4.replace(/\W/ig,'-'); //W : 문자이외 
console.log(result);
result ='morning1 moniong2 morning123'.replace(/\D/g, ''); //d :숫자 
console.log(result);

let sso=['970101-1234567','970101 2334567','9701014434567','970101/1434567'];
sso.forEach(num => console.log(num.replace(/\D/g,'')));

console.log(result);

// 문자열 합치기: + or concat();
console.log('hello'+' world');
console.log('hello'.concat(' world','!!','welcome'));