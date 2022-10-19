import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li作成
  const li = document.createElement("li");
  console.log(li);

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  console.log(div);

  // span生成
  const span = document.createElement("span");
  span.innerText = inputText;
  console.log(span);

  // li生成
  // const li = document.createElement("li");
  // li.innerText = inputText;

  // 子要素に各要素を追加

};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());　//イベントリスナー調べる