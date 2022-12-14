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

// アロー関数(functionを省略できる)

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
// スプレッド構文でコピーすると参照をひきつがない(値を新しく代入しても元の配列はそのまま)
const arr1 = [10, 20];
const arr2 = [30, 40];
const arr3 = [...arr1];
console.log(arr1, arr2, arr3);

const arr4 = [...arr1, ...arr2];
console.log(arr4);

// filter, map(for文を省略できる)
const nameArr = ["kaomi", "shime", "kyomu"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) =>{
//   return name;
// })
// console.log(nameArr2);
// nameArr.map((name, index) => console.log(index, name));

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// })
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "kyomu"){
//     return `***${"kyomu"}***`
//   } else {
//     return name
//   }
// });
// console.log(newNameArr);

// 三項演算子
// ? 条件がtrueの時、: 条件がfalseの時
// const num = 1 > 0 ? "true" : "false";
// console.log(num);

// const numN = "a";
// const formattedNum = typeof numN === 'number' ? numN.toLocaleString() : "this is not number";
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "over 100" : "kyomu";
}
console.log(checkSum(30,78));

//　|| は左側がfalseなら右側を返す
const num15 = false;
const fee = num15 || "金額いれてね";
console.log(fee);

// && は左側がtrueなら右側を返す
const num152 = null;
const fee2 = num152 && "金額決定"
console.log(fee2);