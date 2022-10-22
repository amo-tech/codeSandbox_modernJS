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

  // button(完了)追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  })

  // button(削除)追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 削除ボタンの親要素を追加
    const deleteButtonParent = deleteButton.parentNode;
    const deleteTarget = deleteButtonParent.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  })

  // 子要素に各要素を追加
  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());　//イベントリスナー調べる