//String /pratice.js

let sso = ['970101-1234567', '970101 2334567', '9701014434567', '970101/1434567'];

function checkGender(ssn) {
  let gender=ssn.replace(/\D/g, '').charAt(6)
  if (gender == 1 || gender == 3) {
    return '남자';
  } else if (gender == 2 || gender == 4) {
    return '여자';
  }
}

sso.forEach(el =>{
  let result = checkGender(el);
console.log(result);

})
