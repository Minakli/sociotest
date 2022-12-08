// const types = {
//   alpha: {
//     esfj: 0,
//     isfp: 0,
//     entp: 0,
//     intj: 0,
//   },
//   beta: {
//     estp: 0,
//     istj: 0,
//     infp: 0,
//     enfj: 0,
//   },
//   gamma: {
//     esfp: 0,
//     isfj: 0,
//     entj: 0,
//     intp: 0,
//   },
//   delta: {
//     estj: 0,
//     istp: 0,
//     enfp: 0,
//     infj: 0,
//   },
// };
const types = {
  alpha: [
    [sens, extra, ethics, ratio],
    [sens, intro, ethics, irratio],
    [int, extra, logic, irratio],
    [int, intro, logic, irratio],
  ],
  beta: [1, 2, 3, 4],
  gamma: [1, 2, 3, 4],
  delta: [1, 2, 3, 4],
};
console.log(esfp);
const questionArr = [
  {
    text: "Хорошо запоминаете местность, которую посетили? Строения, памятники, объекты вокруг?",
    yes: sens,
    yesParam: 1,
    no: sens,
    noParam: -1,
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
    yes: rationality,
    no: null,
    or: null,
  },
  {
    text: "Суете нос в чужие дела?",
    yes: extravertion,
    no: null,
    or: null,
  },
];

// function sens(a) {
//   isfp += a;
//   esfj += a;
//   estp += a;
//   istj += a;
//   esfp += a;
//   isfj += a;
//   istp += a;
//   estj += a;
// }
// function logic(a) {
//   entp += a;
//   intj += a;
//   estp += a;
//   istj += a;
//   intp += a;
//   entj += a;
//   istp += a;
//   estj += a;
// }
// function rationality(a) {
//   esfj += a;
//   intj += a;
//   enfj += a;
//   istj += a;
//   isfj += a;
//   entj += a;
//   estj += a;
//   infj += a;
// }
// function extravertion(a) {
//   esfj += a;
//   entp += a;
//   estp += a;
//   enfj += a;
//   esfp += a;
//   entj += a;
//   enfp += a;
//   estj += a;
// }

function selectedQuestion(elem) {
  let questionText = document.querySelector(".question");
  let btnYes = document.querySelector(".btn__yes");
  let btnOr = document.querySelector(".btn__or");
  let btnNo = document.querySelector(".btn__no");
  questionText.textContent = elem.text;

  btnYes.addEventListener("click", () => {
    elem.yes(elem.yesParam);
    console.log(esfp);
  });
}
// console.log(questionArr[0].yes);
selectedQuestion(questionArr[0]);
