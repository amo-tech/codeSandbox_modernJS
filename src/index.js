const name = "kaomi";

const age = 28;
//　テンプレート文字列
const message = `my name is ${name}. I'm ${age} years old.`;
console.log(message);

function func(str) {
  return str;
}
console.log(func("aaa"));

const funcFunc = function(str){
  return str;
}
console.log(funcFunc("bbb"));

// アロー関数

const funcArrNum = (num) => {
  return num;
}
console.log(funcArrNum(123));

const funcArrStr = (str) => str;
console.log(funcArrStr('ccc'));

const funcAddNum = (num1, num2) => num1 + num2;
console.log(funcAddNum(1, 3));
