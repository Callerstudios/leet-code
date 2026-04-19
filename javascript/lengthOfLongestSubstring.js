// var lengthOfLongestSubstring = function (s) {
//   let longestSubStringCount = 0;
//   let sawDuplicate = false;
//   let lastDuplicateIndex = -1;
//   let checkedString = "";
//   let duplicateChar = "";
//   for (let i = 0; i < s.length; i++) {
//     // console.log("Wow")
//     if (checkedString.includes(s[i])) {
//       sawDuplicate = true;
//       duplicateChar = s[i];
//       let lastSawIndex = checkedString.lastIndexOf(s[i]);
//       let cleanedString;
//       if (lastSawIndex < lastDuplicateIndex) {
//         cleanedString = checkedString.substring(lastDuplicateIndex + 1);
//       } else {
//         cleanedString = checkedString.substring(lastSawIndex);
//       }
//       console.log(
//         `${i} Cleaned ${cleanedString} ${lastSawIndex} ${lastDuplicateIndex}`,
//       );
//       // let splitted = cleanedString.split(s[i])
//       // let focusString = cleanedString.substring(lastSawIndex)
//       if (cleanedString.length + 1 > longestSubStringCount) {
//         longestSubStringCount = cleanedString.length + 1;
//         console.log(`Longest is ${longestSubStringCount}`);
//       }
//       lastDuplicateIndex = i;
//     } else {
//       let focusString;
//       if (sawDuplicate) {
//         let secondLast = checkedString.lastIndexOf(
//           duplicateChar,
//           lastDuplicateIndex - 1,
//         );

//         focusString = checkedString.substring(secondLast + 1);
//         console.log(`Focus: ${focusString} ${secondLast}`);
//       } else {
//         focusString = checkedString;
//         console.log(`Focus: ${focusString}`);
//       }
//       let toAdd = sawDuplicate ? 1 : 0;
//       if (focusString.length + 1 > longestSubStringCount) {
//         longestSubStringCount = focusString.length + 1;
//         console.log(`${i} Longest 2 is ${longestSubStringCount}`);
//       }
//     }
//     checkedString += s[i];
//   }
//   return sawDuplicate ? longestSubStringCount : s.length;
// };
