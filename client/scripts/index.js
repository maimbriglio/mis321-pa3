let toDos = [
    {todo: 'get date', date: '09/28/2022', status: 'false' },
    {todo: 'get date', date: '09/28/2022', status: 'false'},
    {todo: 'get date', date: '09/28/2022', status: 'false' },
]
const baseUrl = '';

function handleOnLoad()
{
    // gettoDos();
    const app = documnet.getElementById('root');

    let table = createTable();

    app.appendChild(table);

    let form = createForm();

    app.appendChild(form);

}

function gettoDos()
{
    const allTasksUrl = baseUrl + 'todos';

    fetch(allTasksUrl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(log){
        console.log(json);

        const app = document.getElementById('root');

        app.appendChild(table);

        let table = createTable();

        app.appendChild(form);
    })
}

function createTable()
{
    let table = document.createElement('TABLE');
    table.id = 'toDoTable';
    table.border = '1';
    let tablebody = document.createElement('TBODY');
    table.bodyid = 'ToDoTableBody';
    table.appendChild(tablebody);

    let tr = document.createElement('TR');
    table.appendChild(tr);

    let th1 = document.createElement('TH');
    th1.width = 500;
    th1.appendChild(document.createTextNode('Date'));
    tr.appendChild(th2);

    let th2 = document.createElement('TH');
    th2.width = 500;
    th2.appendChild(document.createTextNode('Task'));
    tr.appendChild(th2);

    let th3 = document.createElement('TH');
    th3.width = 500;
    th3.appendChild(document.createTextNode('Status'));
    tr.appendChild(th3);

    toDos.forEach((todo) =>{
        let tr = document.createElement('TR');
        tablebody.appendChild(tr);
        let td1 = document.createElement('TD');
        td1.width = 300;
        td1.appendChild(document.createTextNode(`${todo.date}`));
        tr.appendChild(td1);

        let td2 = document.createElement('TD');
        td2.width = 300;
        td2.appendChild(document.createTextNode(`${todo.task}`));
        tr.appendChild(td2);

        let td3 = document.createElement('TD');
        td3.width = 150;
        td3.appendChild(document.createTextNode(`${todo.status}`));
        tr.appendChild(td3);
    }
    )

    return table;

}





function createForm()
{
    let form = document.createElement('form');
    let textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter the to-do';
    textInput.id = 'newToDo';
    form.appendChild(textInput);

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    form.addEventListener('submit', function(e){ //e is parameter
        e.preventDefault(); // don't refresh the page
        console.log('submitted');
        let currentDate = new Date().toJSON().slice(0, 10);
        let todo = {
            todo: document.getElementById('newToDo').value,
            date: currentDate
        }
        addRow(todo);
        createToDo(todo);
        document.getElementById()
    })

    return form;
}

function addRow(todo){
    let tablebody = document.getElementById('ToDoTableBody')
    
        let tr = document.createElement('TR');
        tablebody.appendChild(tr);
        let td1 = document.createElement('TD');
        td1.width = 300;
        td1.appendChild(document.createTextNode(`${todo.date}`));
        tr.appendChild(td1);

        let td2 = document.createElement('TD');
        td2.width = 300;
        td2.appendChild(document.createTextNode(`${todo.todo}`));
        tr.appendChild(td2);

        let td3 = document.createElement('TD');
        td3.width = 300;
        td3.appendChild(document.createTextNode(`${todo.status}`));
        td3.appendChild(document.createTextNode('false'));
        tr.appendChild(td3);
}

function createToDo(todo){
    const postUrl = baseUrl + 'todos';
    console.log(todo);

    const sendToDo = {
        "Date": todo.date,
        "Task": todo.todo,
        "Status": 'false'
    }

    fetch(postUrl, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Contenet-Type": 'application/json'
      },
      body: JSON.stringify(todo)  
    }).then((response) =>{
        if(response.status == 200) {
            window.alert('Todo has been saved');
        }
        console.log('response from the save', response);
    })
}