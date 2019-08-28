const app = {
 dogNames: names,
 getElement: function(classname) {
  const ele = document.querySelector(classname);
  return ele;
 },
 renderDogNames: function() {
  this.dogNames.forEach(dogName => {
   this.appendDogNames(dogName);
  });
  console.log(`Dog names has been rendered`);
 },
 appendDogNames: function(dogName) {
  const p = this.createTag('p', 'items__item', dogName);
  this.getElement('.items').appendChild(p);
 },
 createTag: function(tagName, classname, text) {
  let tag = document.createElement(tagName);
  tag.classList.add(classname);
  tag.textContent = text;
  return tag;
 },
 handleSearch: function(e) {
  e.preventDefault();
  let searchTerm = e.target.value.toLowerCase();
  const allTags = document.querySelectorAll('.items__item');
  allTags.forEach(tag => {
   this.checkMatchingDogName(tag, searchTerm);
  });
 },
 checkMatchingDogName: function(tag, searchTerm) {
  if (tag.textContent.toLowerCase().indexOf(searchTerm) != -1) {
   tag.style.display = 'block';
  } else {
   tag.style.display = 'none';
  }
 },
 bindEvent: function() {
  this.getElement('.container__search').addEventListener(
   'keyup',
   this.handleSearch.bind(this)
  );
  console.log(`Event has been binded`);
 },
 init: function() {
  this.renderDogNames();
  this.bindEvent();
 }
};

app.init();
