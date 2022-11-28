function addNewTask() {
  let list = document.getElementById("list");
  let text = document.getElementById("task_name").value;


  if(text.length === 0) {
    alert('Por favor, digite uma tarefa!')
    return;
  }
  
  let listItem = document.createElement("li");
  let textRes = document.querySelector("#task_name");
  listItem.className = "list-item";

  const textElement = document.createTextNode(text);
  listItem.appendChild(textElement);
  list.appendChild(listItem);

  textRes.value = ''
  textRes.focus()

}
