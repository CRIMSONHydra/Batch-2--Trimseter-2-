function prepareIngredients() {
  setTimeout(function () {
    console.log("Ingredients Prepared");
  }, 1000);
}

function cookDish() {
  setTimeout(function () {
    console.log("Dish cooked");
  }, 2000);
}

function serveDish() {
  setTimeout(function () {
    console.log("Dish Served");
  }, 500);
}

function cleanUp() {
  setTimeout(function () {
    console.log("Table cleaned");
  }, 3000);
}

new Promise((resolve) => {
  resolve(prepareIngredients);
})
  .then((cb) => {
    cb();
    return new Promise((resolve) => {
      resolve(cookDish);
    });
  })
  .then((cb) => {
    cb();
    return new Promise((resolve) => {
      resolve(serveDish);
    });
  })
  .then((cb) => {
    cb();
    return new Promise((resolve) => {
      resolve(cleanUp);
    });
  })
  .then((cb) => cb());
