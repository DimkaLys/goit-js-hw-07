const inputRangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const changeFontSizeText = inputRangeEl.addEventListener('input', changeFontSize);
function changeFontSize(event) {
  const fontSize = Number(event.currentTarget.value) +'px';
  textEl.setAttribute("style", `font-size: ${fontSize}`);
}