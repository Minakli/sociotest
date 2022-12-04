let isfp = 0;
let entp = 0;
let esfj = 0;
let intj = 0;

let estp = 0;
let infp = 0;
let enfj = 0;
let istj = 0;

let esfp = 0;
let intp = 0;
let isfj = 0;
let entj = 0;

let enfp = 0;
let istp = 0;
let estj = 0;
let infj = 0;

const questionArr = [
  {
    text: "Хорошо запоминаете местность, которую посетили? Строения, памятники, объекты вокруг?",
    yes: sens(1),
    no: sens(-1),
    or: null,
  },
  {
    text: "Любите животных? Часто кормите птиц?",
    yes: null,
    no: null,
    or: null,
  },
  {
    text: "С трудом просыпаетесь ранним утром? Испытываете сложности с пробуждением?",
    yes: null,
    no: null,
    or: null,
  },
  {
    text: "Предпочитаете с утра наметить список дел, которые нужно выполнить в течение дня?",
    yes: rationality(-1),
    no: null,
    or: null,
  },
  {
    text: "",
    yes: null,
    no: null,
    or: null,
  },
];
function sens(a) {
  isfp += a;
  esfj += a;
  estp += a;
  istj += a;
  esfp += a;
  isfj += a;
  istp += a;
  estj += a;
}
function logic(a) {
  entp += a;
  intj += a;
  estp += a;
  istj += a;
  intp += a;
  entj += a;
  istp += a;
  estj += a;
}
function rationality(a) {
  esfj += a;
  intj += a;
  enfj += a;
  istj += a;
  isfj += a;
  entj += a;
  estj += a;
  infj += a;
}
function extravertion(a) {
  esfj += a;
  entp += a;
  estp += a;
  enfj += a;
  esfp += a;
  entj += a;
  enfp += a;
  estj += a;
}
function selectedQuestion(elem) {
  let questionText = document.querySelector(".question");
  let btnYes = document.querySelector(".btn__yes");
  let btnOr = document.querySelector(".btn__or");
  let btnNo = document.querySelector(".btn__no");
  questionText.textContent = elem.text;
  console.log(btnYes);
  btnYes.addEventListener("click", () => {
    console.log(questionArr[0].yes);
    console.log(esfp);
  });
}
// console.log(questionArr[0].yes);
selectedQuestion(questionArr[0]);
