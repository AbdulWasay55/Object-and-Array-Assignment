let  scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
let correctArray :(number|string|boolean|undefined)[]=[]
correctArray.unshift(scrambledArray.pop())
correctArray.push(scrambledArray[4]);
correctArray.push(scrambledArray[5])
correctArray.push(scrambledArray.shift());
correctArray.splice(4,0,scrambledArray[0]);
correctArray.splice(5,0,scrambledArray[5]);
correctArray.join();
let joinArray = correctArray.join(' ')
console.log(joinArray);
