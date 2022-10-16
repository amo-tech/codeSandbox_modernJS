import "./styles.css";

const onClickAdd = () => {
  alert();
  console.log("追加ボタン押しました")
};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());　//イベントリスナー調べる