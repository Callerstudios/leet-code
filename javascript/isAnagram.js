var isAnagram = function (s, t) {
  // if(s.length != t.length) return false
  // let len = s.length
  // for(let i = 0; i < len; i++){
  //     let index = t.indexOf(s[i])
  //     if(index === -1) return false
  //     t = t.substring(0, index) + t.substring(index+1)
  // }
  // return true
  let sortedS = s.split("").sort().join("");
  let sortedT = t.split("").sort().join("");

  return sortedS === sortedT;

  // var getStringCharCode = (str) =>{
  //     let num = 0
  //     for(s of str){
  //         num += s.charCodeAt(0)
  //     }
  //     return num
  // }
  // return getStringCharCode(s) === getStringCharCode(t)
};
