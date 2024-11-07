const form = document.getElementById('form-tarefa');
const lista = document.getElementById('lista-tarefas');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const tarefa = document.getElementById('tarefa').value;
    if (tarefa !== '') {
        const li = document.createElement('li');
        li.classList.add('tarefa');
        li.textContent = tarefa;
        lista.appendChild(li);
        document.getElementById('tarefa').value = '';
    }
});

lista.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('concluida');
    }
});


