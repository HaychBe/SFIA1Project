'use strict';


// ! CREATE ORDER

//Declaring buttons
let submitBtnCreate = document.querySelector('#submitBtnCreate');

//Declaring input form
let forenameInput = document.querySelector('#forenameInput').value;
let surnameInput = document.querySelector('#surnameInput').value;
let emailInput = document.querySelector('#emailInput').value;


//Create order Method
let createOrder = (forenameInput, surnameInput, emailInput) => {


    // outputBox.value = `Thank you for your order ${forenameInput} ${surnameInput}.`

    let myObj = new Object();

    myObj.forename = forenameInput;
    myObj.surname = surnameInput;
    myObj.email = emailInput;

    return myObj;
}

//Converting created Obj into a JSON obj and sending to API
let sendCreateOrderRequest = (myObj) => {
    fetch(`http://localhost:9999/QueueManagement/create`, {
        method: `POST`,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(myObj)
    })
        .then((response) => {
            if (response.status !== 201) {
                console.log(`Status ${response.status}`);
                console.log(response);
                return;

            }
            response.json()
                .then((data) => {
                    console.log(`Request succesful with JSON repsonse ${data}`)
                    let displayString = `Thank you for your Order ${data.forename}. Your OrderID is: ${data.orderId}.`
                    outputBox.value = displayString;
                })
                .catch((error) => console.log(error))
        });
}

//event listener to trigger all events
submitBtnCreate.addEventListener('click', (event) => {
    event.preventDefault()
    let orderObj = createOrder(forenameInput, surnameInput, emailInput);
    let response = sendCreateOrderRequest(orderObj);
});


// ! DELETE ORDER

//Declaring buttons
let submitBtnDelete = document.querySelector('#submitBtnDelete');

//Declaring input form
let orderIdInput = document.querySelector('#orderIdInput').value;


//Delete order Method
let deleteOrder = (orderIdInput) => {
    console.log("Button pressed");
    let orderId = orderIdInput;

    fetch(`http://localhost:9999/QueueManagement/delete/${orderId}`, {
        method: `DELETE`
    })
        .then((data) => {
            console.log(`Data deleted at orderId ${orderId}`)
            let displayString = `Your Order has now been deleted`
            outputBox2.value = displayString;
        })
        .catch((error) => console.log(error));
}

submitBtnDelete.addEventListener('click', (event) => {
    event.preventDefault()
    deleteOrder(orderIdInput);
})