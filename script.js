const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// 點擊「新增」按鈕時新增任務
addBtn.addEventListener("click", addTask);

// 按下 Enter 鍵也可以新增任務
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("請輸入待辦事項！");
    return;
  }

  // 建立一個 <li> 項目
  const li = document.createElement("li");

  // 建立文字內容
  const span = document.createElement("span");
  span.textContent = taskText;

  // 點擊文字可以切換「完成」狀態（畫刪除線）
  span.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // 建立刪除按鈕
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "刪除";
  deleteBtn.classList.add("delete-btn");

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // 清空輸入框
  taskInput.value = "";
  taskInput.focus();
}