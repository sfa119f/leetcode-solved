/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
  let dup=[...arr]
  dup.sort((a,b)=>a-b)
  let mp = new Map()
  mp.set(dup[0],1)
  for(let i=1;i<dup.length;i++){
    if(dup[i]>dup[i-1])mp.set(dup[i],mp.get(dup[i-1])+1)
    else mp.set(dup[i],mp.get(dup[i-1]))
  }
  let res=[]
  for(let x of arr){
    res.push(mp.get(x))
  }
  return res
};