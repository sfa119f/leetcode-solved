/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  const ageSenior = '60'
  
  let res = 0
  for (let i = 0; i < details.length; i++) {
    if (details[i].substring(11, 13) > ageSenior) {
      res++
    }
  }
  return res
};