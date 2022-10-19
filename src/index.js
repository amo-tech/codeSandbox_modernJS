import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li作成
  const li = document.createElement("li");

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // span生成
  const span = document.createElement("span");
  span.innerText = inputText;

  // 子要素に各要素を追加
  li.appendChild(div);
  div.appendChild(span);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
  console.log(li);


};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());　//イベントリスナー調べる