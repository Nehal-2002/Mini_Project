function takeValue() {
    let txt = document.getElementById("input-data").value;

    // Creating div,done and delete button
    let item_text = document.createElement("div");
    item_text.setAttribute("class", "item-text");
    item_text.innerHTML = txt;

    let button_done = document.createElement("button");
    button_done.innerHTML = "Done";
    button_done.classList.add("buttons", "done");

    let button_delete = document.createElement("button");
    button_delete.innerHTML = "Delete";
    button_delete.classList.add('buttons', 'delete');

    // Adding item-text,Done-button,Delete-button in item div
    let node = document.createElement("div");
    node.classList.add("items")
    node.appendChild(item_text);
    node.appendChild(button_done);
    node.appendChild(button_delete);

    // Finally Adding item in item-list
    let listItem = document.getElementById("items_container");
    listItem.appendChild(node);

    // Adding events to done and delete button
    button_done.addEventListener('click', function () { taskDone(item_text); });
    button_delete.addEventListener('click', function () { taskDelete(node); });
}

function taskDone(obj) {
    obj.style.textDecoration = "line-through";
}

function taskDelete(obj) {
    obj.remove();
}