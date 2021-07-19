const ingredientsListRef = document.querySelector('#categories');
console.log(`В списке ${ingredientsListRef.children.length} категории.`);
[...ingredientsListRef.children].forEach(item => {
  console.dir(`Категория: ${item.children[0].textContent}`);
  console.dir(`Количество элементов: ${item.children[1].children.length}`);
})