let todos = [];

function todo() {
  let input = document.getElementById("todo");
  let value = input.value;

  if (value === "") {
    alert("Please enter the name");
    return;
  }

  todos.unshift(value);
  input.value = "";

  showtodo();
}

function showtodo() {
  let list = document.getElementById("todolist");
  list.innerHTML = "";

  todos.forEach((task, index) => {
    list.innerHTML += `
      <li>
        ${task}
        <button onclick="deletetodo(${index})">Delete</button>
      </li>
    `;
  });
}

function deletetodo(index) {
  todos.shift(index, 1);
  showtodo();
}
