function prepareIngredients(cb1, cb2, cb3) {
  setTimeout(function () {
    console.log("Ingredients Prepared");
    cb1(cb2, cb3);
  },2000);
}

function cookDish(cb2, cb3) {
  setTimeout(function () {
    console.log("Dish cooked");
    cb2(cb3)
  },5000);
}

function serveDish(cb3) {
  setTimeout(function () {
    console.log("Dish Served");
    cb3();
  },6000);
}

function cleanUp() {
  setTimeout(function () {
    console.log("Table cleaned");
  },9000);
}

prepareIngredients(cookDish, serveDish, cleanUp);
