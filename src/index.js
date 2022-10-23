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
    // 未完了リストから削除
    const completeButtonParent = completeButton.parentNode;
    deleteFromIncompleteList(completeButtonParent.parentNode);

    // 完了リストに追加するテキストを取得
    const text = completeButtonParent.firstChild.innerText;

    // liタグ内の要素を空にする
    const listContent = completeButtonParent.parentNode;
    listContent.textContent = null;

    // spanタグ作成
    const span = document.createElement("span");
    span.innerText = text;

    // 戻すボタン作成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押されたdeleteButtonの親タグ(li)を完了リストから削除
      const deleteDiv = backButton.parentNode;
      const deleteTarget = deleteDiv.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstChild.innerText;

      // liタグ内の要素を空にする
      const backButtonParent = backButton.parentNode;
      const deleteListContent = backButtonParent.parentNode;
      deleteListContent.textContent = null;

      // li作成
      const li = document.createElement("li");

      // spanタグ作成
      const span = document.createElement("span");
      span.innerText = text;

      //div作成
      const div = document.createElement("div");
      div.className = "list-row";

      // 子要素追加
      li.appendChild(div);
      div.appendChild(span);
      div.appendChild(completeButton);
      div.appendChild(deleteButton);

      // 未完了リストに追加
      document.getElementById("incomplete-list").appendChild(li);
    })

    //div作成
    const div = document.createElement("div");
    div.className = "list-row";

    // 子要素調整
    li.appendChild(div);
    div.appendChild(span);
    div.appendChild(backButton);
    
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(li);


  })

  // button(削除)追加
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 未完了リストから削除
    const deleteButtonParent = deleteButton.parentNode;
    deleteFromIncompleteList(deleteButtonParent.parentNode);
  })

  // 子要素に各要素を追加
  li.appendChild(div);
  div.appendChild(span);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);

  // 未完了リストから指定の要素を削除
  const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
  }

};

document.getElementById("add-button").addEventListener("click", () => onClickAdd());　

//イベントリスナー調べる
// コンポーネント化