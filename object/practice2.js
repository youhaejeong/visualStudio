//object/practice2.js
//달력만들기
let year = 2022;
let month = 2;
showCalendar();

function showCalendar(year=2022, month=4) {
  let firstDay = getFirstDay(year, month); //1일의 위치 지정하기 위한 함수
  let lastDate = getLastDate(year, month); //해당 원의 마지막날을 계산 함수.

  document.write('<table border=1><caption>달력</caption><tr>')
  // document.write('<th>일요일</th><th>월요일</th><th>화요일</th><th>수요일</th><th>목요일</th><th>금요일</th><th>토요일</th><tr></tr>')
  //요일출력
  showDayInfo();
  //빈공간 작성 
  for (let i = 0; i < firstDay; i++) {
    document.write(`<td></td>`);
  }
  //날짜 출력 화면 
  for (let i = 1; i <= lastDate; i++) {
    if ((i + firstDay) % 7 == 0) { //토요일은 파란색으로
      document.write(`<td style="background-color:blue; color:white">${i}</td>`);
    } else if ((i + firstDay) % 7 == 1) {
      document.write(`<td style="background-color:red;">${i}</td>`);
    } else {
      document.write(`<td>${i}</td>`);
    }
    if ((i + firstDay) % 7 == 0) { //줄바꿈 
      document.write(`</tr><tr>`);
    }
  }
  document.write('</tr></table>');
}


//요일 표시 함수 
function showDayInfo() {
  let days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thr', 'Fri', 'Sat'];
  days.forEach(function (day) {

    document.write(`<th style="background:rgb(184, 92, 221)">${day}</th>`)
  })
  document.write('<tr>')
}

function getLastDate(year, month) {
  //마지막 날이 무슨요일인지 
  // return 30;
  switch (month) {
    case 1:
      return 31;
    case 2:
      return 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;

  }
}

function getFirstDay(year, month) {
  //1일 무슨요일인지
  switch (month) {
    case 1:
      return 7;
    case 2:
      return 3;
    case 3:
      return 3;
    case 4:
      return 6;
    case 5:
      return 1;
    case 6:
      return 4;
    case 7:
      return 6;
    case 8:
      return 2;
    case 9:
      return 5;
    case 10:
      return 7;
    case 11:
      return 3;
    case 12:
      return 5;
  }
}

// function showTable(ary) {
//   let tableTag = "";

//   tableTag += '<table><caption>달력</caption>';
//   tableTag += createTable();
//   tableTag += '</table>';

// }