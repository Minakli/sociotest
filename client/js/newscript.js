let sensInt = 0;
let ethicsLogic = 0;
let rationality = 0;
let extraversion = 0;
let questionsArr_0 = [];
const elem = {
  text: "Are you like fish?",
  no: () => {
    sensInt += 1;
  },
  or: () => {
    rationality += 1;
  },
  yes: () => {
    sensInt -= 1;
  },
};

//Создает блок и подписывает кнопки.
function showBlock(elem) {
  const wrapper = document.createElement("div");
  document.body.append(wrapper);
  const p = document.createElement("p");
  p.textContent = "elem.text";
  wrapper.append(p);
  const btnNo = document.createElement("button");
  btnNo.textContent = "No";
  wrapper.append(btnNo);
  const btnOr = document.createElement("button");
  btnOr.textContent = "Not sure";
  wrapper.append(btnOr);
  const btnYes = document.createElement("button");
  btnYes.textContent = "Yes";
  wrapper.append(btnYes);
  btnNo.addEventListener(
    "click",
    () => {
      showBlock(elem);
      elem.no();
    },
    { once: true }
  );
  btnOr.addEventListener("click", () => {
    showBlock(elem);
    elem.or();
  });
  btnYes.addEventListener("click", () => {
    showBlock(elem);
    elem.yes();
  });
}
showBlock(elem);
