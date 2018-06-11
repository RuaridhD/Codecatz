var app = function(){
  addCat('Odin', 'Parma Ham', '<img width="500" src="https://i2-prod.examiner.co.uk/incoming/article13699134.ece/ALTERNATES/s1200/JS69046239.jpg"');
};

var createCatName = function(catName){
  var name = document.createElement('li');
  name.textContent = catName;
  return name;
};

var createCatFavFood = function(foodName){
  var food = document.createElement('li');
  food.textContent = foodName;
  return food;
};

var createCatPic = function(picLink){
  var pic = document.createElement('li');
  pic.textContent = picLink;
  return picLink;
};

var appendElements = function(createCatName, createCatFavFood, createCatPic, container){
  createCatFavFood.appendChild(createCatName);
  createCatPic.appendChild(createCatFavFood);
  container.appendChild(createCatPic);
}

var addCat = function(catName, foodName, picLink){
  var createCatPic = createCatPic(picLink);
  var createCatFavFood = createCatFavFood(foodName);
  var createCatName = createCatName(catName);
  var container = document.querySelector('#cats');

  appendElements(createCatPic, createCatFavFood, createCatName, container);
  };

window.onload = app;
