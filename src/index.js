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

// スプレッド構文
const arr101201 = [0, 1, 2, 3];
//console.log(arr101201);
//console.log(...arr101201);

// const add101202 = (num1, num2, num3, num4) => console.log(num1 + num2 + num3 + num4);
// add101202(arr101201[0], arr101201[1], arr101201[2], arr101201[3]);
// add101202(...arr101201);

const [num1, num2, ...arrAdd] = arr101201;
// console.log(num1);
// console.log(num2);
// console.log(arrAdd);

// 配列のコピー、結合
// スプレッド構文でコピーすると参照が変わらない(値を新しく代入しても元の配列はそのまま)
const arr1 = [10, 20];
const arr2 = [30, 40];
const arr3 = [...arr1];
console.log(arr1, arr2, arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);

