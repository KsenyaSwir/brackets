module.exports = function check(str, config) {

  let newConfig = config.map(item => item.join(''));
  let bracket = "";
  let result = str;

  for (let j = 0; j < str.length; j++) {
      for (let i = 0; i < newConfig.length; i++) {
          if (result.includes(newConfig[i])) {
              bracket = newConfig[i];

              result = result.replace(bracket, "");
              console.log(result);
              i--;
          }
      }
  }
  if (result === '') {
      return true;
  } else {
      return false;
  }
}