//object / basic.js

const member = {
  memberId: 'user1',
  memberName: 'Hong',
  //기능을 달면 메소드 
  getMemberName: function () {
    return `회원이름은  ${this.memberName}`;
  },
  setMemberName: function (name) {
    this.memberName = name;
  }
}
//연산자에 .붙여서 속성 추가 가능 
console.log(member.memberId);
member.setMemberName('hwang');
console.log(member.getMemberName());
member.memberAge = 20;
delete member.memberAge;
member['memberPoint'] = 1000;
member.grade = function () {
  if (this.memberPoint > 500) {
    return 'gold'
  } else if (this.memberPoint > 1000) {
    return 'platinum'
  }
}
console.log(member.grade());

//클래스 ,Construct 함수, =>object 생성.
//constructor 생성자
class Student {
  constructor(sno, sname) {
    this.sno = sno;
    this.sname = sname;
  }
  //값을 지정하고싶을떄는 겟 셋을 활용 
  set mathScore(score) {
    this._mathScore = score; //생성자에 선언되지 않은 속성 추가
  }
  get mathScore() {
    return this._mathScore; //_mathScore 속성값을 읽어오겠음 
  }
  getSno() {
    return this.sno;
  }
  setSno(sno) {
    this.sno = sno;
  }
}
//재활용 불가 
const s1 = new Student('1111', 'Hong');
const s2 = new Student('2222', 'Hwang');
console.log('학생번호: ' + s1.getSno());
s1.engScore = 80;
//mathScore라는 셋터를 호출하겠습니다.
s1.mathScore = 90;
console.log(s1.engScore);
//mathscore 라는 겟터를 호출하겠ㅅ브니다.
console.log(s1.mathScore);

//그 자체가 생성자
function Person(ssn, sname) {
  this.ssn = ssn;
  this.sname = sname;
  this.getInfo = function () {
    return `주민번호 ${ this.ssn}, 이름 ${this.sname}`;
  }
}
const p1 = new Person ('951111-1111111','Hong');
const p2 = new Person ('971111-2222222','Hwang');
const p3 = new Person ('111111-3333333','Park');
console.log(p1.getInfo());

