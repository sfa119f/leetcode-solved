/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function(skill) {
  if (skill.length % 2 != 0) return -1
  //if (skill.length == 2) return skill[0] * skill[1]

  const skillMap = new Map()
  const minVal = Math.min(...skill)
  const maxVal = Math.max(...skill)
  
  for (let i = minVal; i <= maxVal; i++) {
    skillMap.set(i, 0)
  }
  
  for (let i = 0; i < skill.length; i++) {
    skillMap.set(skill[i], skillMap.get(skill[i]) + 1)
  }
  
  let res = 0
  for (let i = 0; i < (maxVal - minVal + 1) / 2; i++) {
    if (minVal + i == maxVal - i) {
      if (skillMap.get(minVal + i) % 2 != 0) {
        return -1
      } else {
        res += (Math.pow(minVal + i, 2) * skillMap.get(minVal + i) / 2)
      }
    } else {
      if (skillMap.get(minVal + i) != skillMap.get(maxVal - i)) {
        return -1
      } else {
        res += ((minVal + i) * (maxVal - i) * skillMap.get(minVal + i))
      }
    }
  }
  
  return res
};