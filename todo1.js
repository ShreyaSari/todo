document.getElementById('addTodo').addEventListener('click', function(e) {
    e.preventDefault();
    let inputValue = document.getElementById('todoInput').value;
    if(inputValue.trim() !== '') {
        let listItem = document.createElement('li');
        listItem.classList.add('todo-item');
        listItem.innerHTML = `
            <span>${inputValue}</span>
            <button class="delete-btn">Mark Completed</button>
        `;
        document.getElementById('todoList').appendChild(listItem);
        document.getElementById('todoInput').value = '';
        addDeleteEventListener();
    }
});

function addDeleteEventListener() {
    let deleteButtons = document.getElementsByClassName('delete-btn');
    for(let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', function() {
            this.parentElement.remove();
        });
    }
}