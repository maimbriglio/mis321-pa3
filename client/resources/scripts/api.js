const baseUrl = "https://localhost:7159/api/Driver";


function postDriver(id){
    const sendDriver = {
        id: id,
        name: document.getElementById("name").value,
        rating: 5,
        dateHired: Date.now(),
        deleted: false
    }
    fetch(baseUrl, {
        method: "PUT",
        headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(sendDriver)
    })
    .then((response)=>{
        myDriver = sendDriver;
        populateList();
        populateForm();
    });
}