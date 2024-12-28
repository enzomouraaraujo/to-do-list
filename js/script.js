function addtask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('tasklist');

    if (taskInput.value === '') {
        alert('por favor crie uma task');
        return;
    }

    // criar nova lista
    const li = document.createElement('li');
    li.textContent = taskInput.value;

    // Criar botao de remover
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';
    removeBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(removeBtn);

    taskList.appendChild(li);

    taskInput.value = '';

    
}