
let app = document.getElementById("app")
let taskCount = 0
let toDos = JSON.parse(localStorage.getItem('myToDos')) ? JSON.parse(localStorage.getItem('myToDos')) : []


const baseUrl = '';

function handleOnLoad()
{
    
    createDriverTable()
    displayDriverTable()
    // createTable()
    // createForm()
    // createDriverTable()
    // gettoDos();
    // const app = documnet.getElementById('root');

    // let table = createTable();

    // app.appendChild(table);

    // let form = createForm();

    // app.appendChild(form);


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
    table.border = '1';
    table.id = 'toDoTable';
    let tableBody = document.createElement('TBODY');
    tableBody.id = 'ToDoTableBody';
    table.appendChild(tableBody);

    //create header row
    let tr = document.createElement('TR');
    tableBody.appendChild(tr);

    let th1 = document.createElement('TH');
    th1.width = 500;
    th1.appendChild(document.createTextNode('To Do'));
    tr.appendChild(th1);

    let th2 = document.createElement('TH');
    th2.width = 200;
    th2.appendChild(document.createTextNode('Date'));
    tr.appendChild(th2);

    //Add data rows
    toDos.forEach((toDo) =>{
        let tr = document.createElement('TR');
        tableBody.appendChild(tr);

        let td1 = document.createElement('TD');
        td1.width = 500;
        td1.appendChild(document.createTextNode(`${toDo.todo}`));
        tr.appendChild(td1);

        let td2 = document.createElement('TD');
        td2.width = 300;
        td2.appendChild(document.createTextNode(`${toDo.date}`));
        tr.appendChild(td2);
    }
    )

    app.appendChild(table)

}





function createForm()
{
    let form = document.createElement('form');
    let textInput = document.createElement('input');
    textInput.type = 'text';
    textInput.placeholder = 'Enter a to do';
    textInput.id = 'newToDo';
    form.appendChild(textInput);

    let submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    form.appendChild(submitButton);

    form.addEventListener('submit', function(e){
        e.preventDefault(); // don't refresh the page
        console.log('submitted');
        let currentDate = new Date().toJSON().slice(0,10)
        let toDo = {
            todo: e.target.elements.newToDo.value,
            date: currentDate
        }
        addRow(toDo);
        e.target.elements.newToDo.value = ''
        // createToDo(todo);
        // document.getElementById()
    })

    app.appendChild(form)
}

function addRow(toDo){
    let tableBody = document.getElementById('ToDoTableBody')
    let tr = document.createElement('TR');
    tableBody.appendChild(tr);

    let td1 = document.createElement('TD');
    td1.width = 500;
    td1.appendChild(document.createTextNode(`${toDo.todo}`));
    tr.appendChild(td1);

        let td2 = document.createElement('TD');
        td2.width = 500;
        td2.appendChild(document.createTextNode(`${toDo.date}`));
        tr.appendChild(td2);

        toDos.push(toDo)

        localStorage.setItem('myToDos', JSON.stringify(toDos))
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

function dateTime(){
    const date = new Date();
    const n = date.toString();
    console.log('Date: '+ n);

}

function makeEditable(){
    document.getElementById("name").readOnly=false;
    document.getElementById("rating").readOnly=false;
    document.getElementById("deleted").readOnly=false;
}

function createDriverTable()
{
    // get the data
    const url = 'https://localhost:5001/api/ToDos'
    fetch(url).then(function(response){
        console.log(response)
        return response.json()
    }).then(function(json){
        console.log(json)
        // display the table
        displayDriverTable(json)
    })
}

function displayDriverTable(holidayData)
{
    //create table
    let table = document.createElement('TABLE');
    table.id = 'holidayTable';
    table.border = '1';
    let tablebody = document.createElement('TBODY');
    table.bodyid = 'holidayTableBody';
    table.appendChild(tablebody);

    //create header row
    let tr = document.createElement('TR');
    tablebody.appendChild(tr);

    let th1 = document.createElement('TH');
    th1.width = 500;
    th1.appendChild(document.createTextNode('Holiday'));
    tr.appendChild(th1);

    let th2 = document.createElement('TH');
    th2.width = 200;
    th2.appendChild(document.createTextNode('Date'));
    tr.appendChild(th2);

    //add data rows
    holidayData.forEach((holiday) =>{
        let tr = document.createElement('TR');
        tablebody.appendChild(tr);
        let td1 = document.createElement('TD');
        td1.width = 500;
        td1.appendChild(document.createTextNode(`${holiday.name}`));
        tr.appendChild(td1);

        let td2 = document.createElement('TD');
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${holiday.date}`));
        tr.appendChild(td2);
    }
    )

    app.appendChild(table)

}