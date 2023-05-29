const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

function fetchAPI(date) {
  let result = [];
  date = Date.parse(date);
  // console.log("mockup date typeOf: ", typeof date);
  let random = seededRandom(date);

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
}

function submitAPI(formData) {
  return true;
}

module.exports = {
  submitAPI,
  fetchAPI,
};
