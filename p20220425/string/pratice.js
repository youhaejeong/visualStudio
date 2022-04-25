//string /pratice.js

let str1=' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur consequatur error unde veniam at? Omnis obcaecati laboriosam, facere nostrum, inventore quis unde iste, quidem iure in quo quos soluta accusantium.';
// 단어의 길이가 10개 이상인 값을 골라내서 
console.log('hello'.length);
let result = str1.split(' ').filter(str1 =>str1.length >='10').join('/'); //el 엘리먼트 문자열의 크기가 10보다 큰것 
console.log(result);