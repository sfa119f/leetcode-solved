/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  const travelDays = new Set(days)
  const lastDay = days[days.length - 1]
  const dpCost = new Array(lastDay + 1).fill(0);
  
  for(let i = 1; i <= lastDay; i++){    
    if(!travelDays.has(i)){
      dpCost[i] = dpCost[i - 1]
    } else {
      dpCost[i] = Math.min(
        dpCost[i - 1] + costs[0],
        dpCost[Math.max(i - 7, 0)] + costs[1],
        dpCost[Math.max(i - 30, 0)] + costs[2]
      )
    }
  }

  return dpCost[lastDay]
};