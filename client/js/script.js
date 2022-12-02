let sensInt = 0;
let ethicsLogic = 0;
let rationality = 0;
let extraversion = 0;
let questionsArr_0 = [
  {
    question: "Вы хорошо учились в школе?",
    si: -1,
    el: null,
    ratio: 1,
    extra: 2,
  },
];
console.log(questionsArr_0);
// let count = 0;
function randomQuestion_0() {
  let i = Math.round(Math.random() * questionsArr_0.length - 1);
  return questionsArr_0.splice(i, 1)[0].question;
}

// let pq_1 = document.querySelector(".question_1");
// let btnNo = document.querySelector(".btn_no");
// let btnOr = document.querySelector(".btn_or");
// let btnYes = document.querySelector(".btn_yes");
// pq_1.textContent = randomQuestion_0();
// console.log(questionsArr_0);

//Создает обработчик нажатия кнопки
function createSelector(objQuestion) {
  sensInt += objQuestion.si;
  ethicsLogic += objQuestion.el;
  rationality += objQuestion.ratio;
  extraversion += objQuestion.extra;
  console.log(sensint, ethicsLogic, rationality, extraversion);
}
//Создает блок вопросов и ответов
function createBlock(objQuestion) {
  // count += 1;
  let form = document.createElement("div");
  // form.setAttribute("id", "form__id" + count);
  let p = document.createElement("p");
  p.textContent = objQuestion.question;
  let btnNo = document.createElement("button");
  btnNo.textContent = "No";
  let btnOr = document.createElement("button");
  btnOr.textContent = "Not sure";
  let btnYes = document.createElement("button");
  btnYes.textContent = "Yes";
  document.body.append(form);
  form.append(p);
  form.append(btnNo);
  form.append(btnOr);
  form.append(btnYes);
  form.addEventListener(
    "click",
    () => {
      createSelector();
    },
    { once: true }
  );
}

createBlock(randomQuestion_0());
// createBlock();
// createBlock();
console.log(questionsArr_0);
