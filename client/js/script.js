let sens = 0;
let questionsArr_0 = [
  { question: "Вы хорошо учились в школе?", yes: null, or: null, no: null },
  "Вам легко вставать утром рано?",
  "Вы занимаетесь спортом?",
  "Вы любите подолгу смотреть фильмы?",
];
let count = 0;
function randomQuestion_0() {
  let i = Math.round(Math.random() * questionsArr_0.length - 1);
  return questionsArr_0.splice(i, 1)[0].question;
}

let pq_1 = document.querySelector(".question_1");
// let btnNo = document.querySelector(".btn_no");
// let btnOr = document.querySelector(".btn_or");
// let btnYes = document.querySelector(".btn_yes");
pq_1.textContent = randomQuestion_0();
console.log(questionsArr_0);

//Создает блок вопросов и ответов
function createBlock() {
  count += 1;
  let form = document.createElement("div");
  form.setAttribute("id", "form__id" + count);
  let p = document.createElement("p");
  p.textContent = randomQuestion_0();
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
  btnNo.addEventListener("click", createBlock, { once: true });
}

createBlock();
// createBlock();
// createBlock();
console.log(questionsArr_0);
