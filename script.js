
const tasks = [];

while (true) {

    const task = prompt('Enter task:')

    if (task === null) break;

    tasks.push(task);

};

const ul = document.createElement('ul');

document.body.prepend(ul);

ul.id = 'ulTask'

const getUl = document.getElementById('ulTask');

for (let i = 0; i < tasks.length; i++) {

    const li = document.createElement('li');

    getUl.append(li);
    
    li.textContent = tasks[i];
    
};