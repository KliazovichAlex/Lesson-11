function anketa() {
  const name = prompt("Введите ваше имя");
  check(name);
  const secondName = prompt("Введите вашу фамилию");
  check(secondName);
  const lastName = prompt("Введите ваше отчество");
  check(lastName);

  function check(input) {
    while (input === "") {
      input = prompt("Попробуйте вести еще раз");
    }
  }
  const age = prompt("Сколько вам лет?");
  isNum(age);
  check(age);
  function isNum(num) {
    let checkAge = Number(num);
    console.log(checkAge);
    console.log(typeof checkAge);
    if (checkAge >= 0) {
    } else {
      num = prompt("Введите ваш возрост цифрами!");
      return num;
    }
    return num;
  }
  function years(a) {
    let b = +a + 5;
    return b;
  }
  const sex = confirm("Ваш пол мужской?");
  let gender = null;
  checkSex(sex);
  function checkSex(info) {
    if (info) {
      gender = "Мужской";
    } else {
      gender = "Женский";
    }
    return gender;
  }
  let pension = null;
  checkPension(age, sex);
  function checkPension(howOld, whoAre) {
    if (whoAre) {
      if (+howOld >= 65) {
        pension = "Пенсионер";
      } else {
        pension = "Марш работать";
      }
    } else {
      if (+howOld >= 55) {
        pension = "Пенсионерка";
      } else {
        pension = "Марш работать";
      }
    }
    return pension;
  }

  alert(
    "Ваше ФИО :" +
      name +
      " " +
      secondName +
      " " +
      lastName +
      "\n" +
      "Ваш возрост в годах : " +
      age +
      "\n" +
      "ваш возрост в днях : " +
      age * 365 +
      "\n" +
      "Через 5 лет вам будет : " +
      years(age) +
      "\n" +
      "Ваш пол:  " +
      gender +
      "\n" +
      "Вы на пенсии : " +
      pension
  );
}
anketa();
