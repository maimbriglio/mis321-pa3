
let app = document.getElementById("app")
const baseUrl = "https://localhost:7159/api/Driver"


function handleOnLoad()
{
    
    createDriverTable()
   
}

function getDrivers()
{
    const allDriversUrl = baseUrl;

    fetch(allDriversUrl).then(function(response){
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

function createDriver(driver){
    const postUrl = baseUrl;
    console.log(driver);

    const sendDriver = {
        name : document.getElementById("name").value,
        rating : 5,
        //dateHired : Date.now()
    }

    fetch(postUrl, {
      method: 'POST',
      headers: {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      },
      body: JSON.stringify(sendDriver)  
    }).then((response) =>{
        if(response.status == 200) {
            window.alert('New driver has been saved');
        }
        console.log('response from the save', response);
    })
}

function fireDriver()
{
    const putUrl = baseUrl;

    const sendDriver = {
        name : document.getElementById("name").value,
        deleted: true
    }
    console.log(document.getElementById("name").value)
    fetch(putUrl, {
        method: "DELETE",
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(sendDriver)  
      }).then((response) =>{
          if(response.status == 200) {
              window.alert('Driver has been fired');
          }
          console.log('response from the save', response);
      })
}

function editDriver()
{
    const postUrl = baseUrl;

    const sendDriver = {
        name : document.getElementById("name").value,
        rating : document.getElementById("rating").value
    }
    console.log(document.getElementById("rating").value)
    fetch(postUrl, {
        method: "PUT",
        headers: {
          "Accept": 'application/json',
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(sendDriver)  
      }).then((response) =>{
          if(response.status == 200) {
              window.alert('Driver rating has been updated');
          }
          console.log('response from the save', response);
      })
}

async function createDriverTable()
{
    // get the data
    const url = 'https://localhost:7159/api/Driver';
    const drivers = await fetch(url).then(r => r.json());
    console.log(drivers);
    displayDriverTable(drivers);
    // }).then(function(response){
    //     console.log(response)
    //     return response.json()
    // });
    // displayDriverTable(drivers)
}

function displayDriverTable(driverData)
{
    //create table
    let table = document.createElement('TABLE');
    table.id = 'driverTable';
    table.border = '1';
    let tablebody = document.createElement('TBODY');
    table.bodyid = 'driverTableBody';
    table.appendChild(tablebody);

    //create header row
    let tr = document.createElement('TR');
    tablebody.appendChild(tr);

    // let th1 = document.createElement('TH');
    // th1.width = 500;
    // th1.appendChild(document.createTextNode('Driver ID'));
    // tr.appendChild(th1);

    let th2 = document.createElement('TH');
    th2.width = 200;
    th2.appendChild(document.createTextNode('Name'));
    tr.appendChild(th2);

    let th3 = document.createElement('TH');
    th3.width = 200;
    th3.appendChild(document.createTextNode('Date Hired'));
    tr.appendChild(th3);

    let th4 = document.createElement('TH');
    th4.width = 200;
    th4.appendChild(document.createTextNode('Rating'));
    tr.appendChild(th4);

    let th5 = document.createElement('TH');
    th5.width = 200;
    th5.appendChild(document.createTextNode('Fired?'));
    tr.appendChild(th5);

    //add data rows
    driverData.forEach((Driver) =>{
        if(Driver.deleted == false)
        {
        let tr = document.createElement('TR');
        tablebody.appendChild(tr);
        // let td1 = document.createElement('TD');
        // td1.width = 500;
        // td1.appendChild(document.createTextNode(`${Driver.id}`));
        // tr.appendChild(td1);

        let td2 = document.createElement('TD');
        td2.width = 100;
        td2.appendChild(document.createTextNode(`${Driver.name}`));
        tr.appendChild(td2);

        let td3 = document.createElement('TD');
        td3.width = 100;
        td3.appendChild(document.createTextNode(`${Driver.dateHired}`));
        tr.appendChild(td3);

        let td4 = document.createElement('TD');
        td4.width = 100;
        td4.appendChild(document.createTextNode(`${Driver.rating}`));
        tr.appendChild(td4);

        let td5 = document.createElement('TD');
        td5.width = 100;
        td5.appendChild(document.createTextNode(`${Driver.deleted}`));
        tr.appendChild(td5);
        }
    }
    )

    app.appendChild(table)

}

function showPage(){
    location.replace("show.html")
}
function hirePage(){
    location.replace("hire.html")
}
function editPage(){
    location.replace("edit.html")
}
function firePage(){
    location.replace("fire.html")
}
function homePage(){
    location.replace("index.html")
}



function sortByDate() {
    var tbody = document.querySelector("#driverTableBody");
    // get trs as array for ease of use
    var rows = [].slice.call(tbody.querySelectorAll("tr"));
    
    rows.sort(function(a,b) {
      return convertDate(a.cells[2].innerHTML) - convertDate(b.cells[2].innerHTML);
    });
    
    rows.forEach(function(v) {
      tbody.appendChild(v); // note that .appendChild() *moves* elements
    });
  }

  function sortTable() {
    var table, switching, i, x, y, shouldSwitch;
    table = document.getElementById("driverTable");
    var rows = document.getElementById("driverTable").td2
    switching = true;
    /*Make a loop that will continue until
    no switching has been done:*/
    while (switching) {
      //start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /*Loop through all table rows (except the
      first, which contains table headers):*/
      for (i = 1; i < (rows.length - 1); i++) {
        //start by saying there should be no switching:
        shouldSwitch = false;
        /*Get the two elements you want to compare,
        one from current row and one from the next:*/
        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        //check if the two rows should switch place:
        if (x.dateHired > y.dateHired) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /*If a switch has been marked, make the switch
        and mark that a switch has been done:*/
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }