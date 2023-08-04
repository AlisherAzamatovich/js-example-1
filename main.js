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
