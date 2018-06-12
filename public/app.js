var app = function(){
  addCat('Odin', 'Parma Ham', '<img width="500" src="https://i2-prod.examiner.co.uk/incoming/article13699134.ece/ALTERNATES/s1200/JS69046239.jpg"');
};

var createCatName = function(catName){
  var name = document.createElement('ul');
  name.textContent = catName;
  return name;
};

var createCatFavFood = function(foodName){
  var food = document.createElement('ul');
  food.textContent = foodName;
  return food;
};

var createCatPic = function(picLink){
  var pic = document.createElement('ul');
  pic.textContent = picLink;
  return picLink;
};

var appendElements = function(createCatName, createCatFavFood, createCatPic, container){
  createCatFavFood.appendChild(createCatName);
  createCatPic.appendChild(createCatFavFood);
  container.appendChild(createCatPic);
}

var addCat = function(catName, foodName, picLink){
  var createACatPic = createCatPic(picLink);
  var createACatFavFood = createCatFavFood(foodName);
  var createACatName = createCatName(catName);
  var container = document.querySelector('#cats');

  appendElements(createCatPic, createCatFavFood, createCatName, container);
  };

window.onload = app;
