var oldYear = +prompt("Введите ваш возраст: ")

if (0 < oldYear && oldYear <= 100) {
  if ( oldYear <= 18 ) {
    alert("Вы еще молоды, Вам нужно учиться")
  } else if ( oldYear <= 50 ) {
    alert("Вам нужно работать")
  } else if (oldYear <= 59) {
    alert("Вам скоро на пенсию")
  } else if (oldYear <= 100) {
    alert("Вы пенсионер")
  }
} else {
  alert("Что то пошло не так!!")
}


var timeNow = +prompt("Введите время в цыфрах")

switch (timeNow) {
  case timeNow = 0:
  case timeNow = 1:
  case timeNow = 2:
  case timeNow = 3:
  case timeNow = 4:
  case timeNow = 5:
  case timeNow = 6:
    alert(`${timeNow} часа ночи`)
    break;
  case timeNow = 7:
  case timeNow = 8:
  case timeNow = 9:
  case timeNow = 10:
    alert(`${timeNow} часов утра`)
    break;
  case timeNow = 11:
  case timeNow = 12:
  case timeNow = 13:
  case timeNow = 14:
  case timeNow = 15:
  case timeNow = 16:
  case timeNow = 17:
    alert(`${timeNow} часа дня`)
    break;
  case timeNow = 18:
  case timeNow = 19:
  case timeNow = 20:
  case timeNow = 21:
  case timeNow = 22:
  case timeNow = 23:
    alert(`${timeNow} часов вечера`)
    break;
  default:
    alert("Что то пошло не так");
    break;
}

var a = +prompt("Введите первое число: ")
var b = +prompt("Введите второе число: ")
var c = +prompt("Введите третье число: ")


if ((b < a && a < c) || (c < a && a < b)) {
  alert(`Первое введенное число "${a}" средий`);
} else if ((a<b && b<c) || (c<b && b<a)) {
  alert(`Второе введенное число "${b}" средий`);
} else if ((a<c && c<b) || (b<c && c<a)) {
  alert(`Третье введенное число "${c}" средий`);
} else {
  alert("Ошибка");
}