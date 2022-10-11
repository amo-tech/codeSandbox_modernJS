//const name = "kaomi";

//const age = 28;
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

// 分割代入
const profile = {
  name: "kaomi",
  age: 28,
};
const { name, age } = profile;
const message101101 = `my name is ${name}. I'm ${age} years old`;
console.log(message101101);

const profileShime = ["shime", 30];
const [ nameShime, ageShime ] = profileShime;
const message101102 = `my name is ${nameShime}. I'm ${ageShime} years old`;
console.log(message101102);

// デフォルト値、引数
const sayHello = (name = "guest") => console.log(`Welcome, ${name}!`);
sayHello(); // 引数を入れないとundefinedになる