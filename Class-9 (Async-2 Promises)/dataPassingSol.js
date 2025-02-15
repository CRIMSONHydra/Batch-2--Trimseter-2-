let cleanRoom = function () {
  return new Promise((resolve, reject) => {
    // 50% chance of success
    if (Math.random() < 0.5) {
      resolve("Cleaned The Room");
    } else {
      // 50% chance of failure
      reject("Failed to clean the room");
    }
  });
};

let removeGarbage = function (message) {
  return new Promise((resolve, reject) => {
    // 50% chance of success
    if (Math.random() < 0.5) {
      resolve(message + " then removed Garbage");
    } else {
      // 50% chance of failure
      reject("Failed to remove garbage");
    }
  });
};

let winIcecream = function (message) {
  return new Promise(resolve => {
    resolve(message + " then won Icecream");
  });
};

// Promise Chaining
cleanRoom().then(result => {
  return removeGarbage(result)
}).then(result => {
  return winIcecream(result);
}).then(result => {
  console.log(result);
}).catch(err => {
  console.log(err);
}) 