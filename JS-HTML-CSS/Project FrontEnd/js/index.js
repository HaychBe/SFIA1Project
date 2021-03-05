'use strict';

//Declaring buttons
let submitBtnCreate = document.querySelector('#submitBtnCreate');

//Declaring input form
let forenameInput = document.querySelector('#forenameInput').value;
let surnameInput = document.querySelector('#surnameInput').value;
let emailInput = document.querySelector('#emailInput').value;

//Declaring Object
// const myObj = new Object();

let createOrder = (forenameInput, surnameInput, emailInput) => {
    let outputBox = document.querySelector('#outputBox')
    let forename = forenameInput;
    let surname = surnameInput;
    let email = emailInput;

    outputBox.value = `Thank you for your order ${forename} ${surname}.`
    
    let myObj = new Object();

    myObj.forename = forename;
    myObj.surname = surname;
    myObj.email = email;

    return myObj;
}

let sendCreateOrderRequest = (myObj) => {
    fetch(`http://localhost:9999/QueueManagement/create`, {
        method: `POST`,
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify(myObj)
    })
    .then( (response) => {
        if (response.status !== 201) {
            console.log(`Status ${response.status}`);
            return;
        }
        response.json()
        .then( (data) => console.log(`Request succesful with JSON repsonse ${data}`))
        .catch( (error) => console.log(error))
    });
}


submitBtnCreate.addEventListener('click', (event)=>{
    event.preventDefault()
    let orderObj = createOrder(forenameInput, surnameInput, emailInput);
    let response = sendCreateOrderRequest(orderObj);
});




//JSON output
// {
//     "forename":"forename",
//     "surname":"surname",
//     "email":"email",
//     "position":"n+1"
// }