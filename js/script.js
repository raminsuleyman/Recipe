function showCategory(category) {
  const lists = document.querySelectorAll('.recipe-list');
  lists.forEach(list => list.style.display = 'none');
  document.getElementById(category).style.display = 'grid';
}
