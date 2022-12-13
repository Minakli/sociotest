const ese = 0;
const sei = 0;
const ile = 0;
const lii = 0;
const sle = 0;
const lsi = 0;
const eie = 0;
const iei = 0;
const see = 0;
const esi = 0;
const lie = 0;
const ili = 0;
const lse = 0;
const sli = 0;
const iee = 0;
const eii = 0;

const types = [
  ["ESFJ", ese],
  ["ISFP", sei],
  ["ENTP", ile],
  ["INTJ", lii],
  ["ESTP", sle],
  ["ISTJ", lsi],
  ["ENFJ", eie],
  ["INFP", iei],
  ["ESFP", see],
  ["ISFJ", esi],
  ["ENTJ", lie],
  ["INTP", ili],
  ["ESTJ", lse],
  ["ISTP", sli],
  ["ENFP", iee],
  ["INFJ", eie],
];
let allTypesValueSum = 0;

//Применяет свойства вопроса к типам
function btnHandler(trait, value) {
  types.forEach((elem) => {
    if (elem[0].includes(trait)) {
      elem[1] += value;
      localStorage.setItem(elem[0], elem[1]);
    }
  });
  // selectedQuestion(questionArr[4]);
}

const questionArr = [
  {
    text: "Хорошо запоминаете местность, которую посетили? Строения, памятники, объекты вокруг?",
    yes: "S",
    yesParam: 1,
    or: null,
    orParam: null,
    no: "S",
    noParam: -1,
  },
  {
    text: "Любите животных? Часто кормите птиц?",
    yes: null,
    yesParam: null,
    or: null,
    orParam: null,
    no: null,
    noParam: null,
  },
  {
    text: "С трудом просыпаетесь ранним утром? Испытываете сложности с пробуждением?",
    yes: null,
    yesParam: null,
    or: null,
    orParam: null,
    no: null,
    noParam: null,
  },
  {
    text: "Предпочитаете с утра наметить список дел, которые нужно выполнить в течение дня?",
    yes: null,
    yesParam: null,
    or: null,
    orParam: null,
    no: null,
    noParam: null,
  },
  {
    text: "Суете нос в чужие дела?",
    yes: "P",
    yesParam: 1,
    or: null,
    orParam: null,
    no: "J",
    noParam: 1,
  },
  {
    text: "Ваша работоспособность меняется безо всяких видимых причин от упорного трудоголизма до полной лени?",
    yes: "E",
    yesParam: 1,
    or: null,
    orParam: null,
    no: null,
    noParam: null,
  },
];

//Возвращает случайный элемент из массива

function randomQuestion() {
  let elem = questionArr.splice(
    Math.round(Math.random() * questionArr.length - 1),
    1
  );
  console.log(elem);
  console.log(questionArr);
  return elem[0];
}

//Выводит версии на экран
function showVersion(array) {
  let li_1 = document.querySelector(".version-1");
  let li_2 = document.querySelector(".version-2");
  let li_3 = document.querySelector(".version-3");
  let li_4 = document.querySelector(".version-4");

  li_1.textContent =
    array[0].type +
    "  " +
    ((100 / allTypesValueSum) * array[0].value).toFixed(1) +
    "%";
  li_2.textContent =
    array[1].type +
    "  " +
    ((100 / allTypesValueSum) * array[1].value).toFixed(1) +
    "%";
  li_3.textContent =
    array[2].type +
    "  " +
    ((100 / allTypesValueSum) * array[2].value).toFixed(1) +
    "%";
  li_4.textContent =
    array[3].type +
    "  " +
    ((100 / allTypesValueSum) * array[3].value).toFixed(1) +
    "%";
  localStorage.clear();
}

//Подключает вопрос и вызывает функцию, записывающую результат
function selectedQuestion(elem) {
  let questionText = document.querySelector(".question");
  let btnYes = document.querySelector(".btn__yes");
  let btnOr = document.querySelector(".btn__or");
  let btnNo = document.querySelector(".btn__no");
  if (!questionArr[0]) {
    let ul = document.querySelector("ul");
    ul.style.display = "block";

    questionText.textContent = "";
    const typesArr = [];
    for (let i = 0; i < localStorage.length; i++) {
      typesArr.push({
        type: localStorage.key(i),
        value: localStorage.getItem(localStorage.key(i)),
      });
    }
    typesArr.sort((a, b) => b.value - a.value);

    typesArr.map((current) => (allTypesValueSum += +current.value));
    showVersion(typesArr);
    return;
  }

  questionText.textContent = elem.text;

  btnYes.addEventListener(
    "click",
    () => {
      btnHandler(elem.yes, elem.yesParam);
      selectedQuestion(randomQuestion());
    },
    { once: true }
  );
  btnOr.addEventListener(
    "click",
    () => {
      btnHandler(elem.or, elem.orParam);
      selectedQuestion(randomQuestion());
    },
    { once: true }
  );
  btnNo.addEventListener(
    "click",
    () => {
      btnHandler(elem.no, elem.noParam);
      selectedQuestion(randomQuestion());
    },
    { once: true }
  );
}
selectedQuestion(randomQuestion());
