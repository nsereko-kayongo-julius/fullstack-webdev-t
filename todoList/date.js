exports.getDate = function () {
  const today = new Date();

  const options = {
    weekday: "long",
    //year: "numeric",
    month: "long",
    day: "numeric",
  };
  return today.toLocaleDateString("en-US", options);
};

exports.getDay = function () {
  let today = new Date();
  //   let currentDay = today.getDay();

  const options = {
    weekday: "long",
    //year: "numeric",
  };

  return today.toLocaleDateString("en-US", options);
};
