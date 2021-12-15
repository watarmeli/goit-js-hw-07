const refs = {
  number: document.querySelector('#number'),
  btnRender: document.querySelector('[data-action="render"]'),
  btnDestroy: document.querySelector('[data-action="destroy"]'),
  boxesContainer: document.querySelector('#boxes'),
};

const DEFAULT_SIZE = 30;
let currentBoxSize = DEFAULT_SIZE;

refs.btnRender.addEventListener('click', renderBtnClick);
refs.btnDestroy.addEventListener('click', destroyBtnClick);

function renderBtnClick() {
  let amount = refs.number.value;
  renderBox(amount);
}

function destroyBtnClick() {
  refs.boxesContainer.textContent = '';
  currentBoxSize = DEFAULT_SIZE;
}

function renderBox(amount) {
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.style.width = div.style.height = `${currentBoxSize}px`;
    div.style.backgroundColor = randomColor();
    refs.boxesContainer.append(div);
    currentBoxSize += 10;
  }
}

function randomNumber() {
  return Math.round(Math.random() * (255 - 1) + 1);
}

function randomColor() {
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}
