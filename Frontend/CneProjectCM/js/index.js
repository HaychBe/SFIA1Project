'use strict';


// ! CREATE ORDER

//Declaring buttons
let submitBtnCreate = document.querySelector('#submitBtnCreate');

//Declaring input form



//Create order Method
let createOrder = () => {

    let forenameInput = document.querySelector('#forenameInput').value;
    let surnameInput = document.querySelector('#surnameInput').value;
    let emailInput = document.querySelector('#emailInput').value;


    // outputBox.value = `Thank you for your order ${forenameInput} ${surnameInput}.`

    let myObj = new Object();

    myObj.forename = forenameInput;
    myObj.surname = surnameInput;
    myObj.email = emailInput;

    console.log(myObj);

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
};

//event listener to trigger all events
submitBtnCreate.addEventListener('click', (event) => {
    event.preventDefault()
    let orderObj = createOrder();
    let response = sendCreateOrderRequest(orderObj);
});


// ! DELETE ORDER

//Declaring buttons
let submitBtnDelete = document.querySelector('#submitBtnDelete');

//Declaring input form
// let orderIdInput = document.querySelector('#orderIdInput').value;


//Delete order Method
let deleteOrder = () => {
    console.log("Button pressed");
    let orderIdInput = document.querySelector('#orderIdInput').value;

    console.log(orderIdInput);

    fetch(`http://localhost:9999/QueueManagement/delete/${orderIdInput}`, {
        method: `DELETE`
    })
        .then((data) => {
            console.log(`Data deleted at orderId ${orderIdInput}`)
            let displayString = `Your Order has now been deleted`
            outputBox2.value = displayString;
        })
        .catch((error) => console.log(error));
};

submitBtnDelete.addEventListener('click', (event) => {
    event.preventDefault()
    deleteOrder();
})

// ! READ ORDER


//Declaring buttons
let submitBtnRead = document.querySelector('#submitBtnRead');





let fetchOrder = () => {

    let orderIdInput2 = document.querySelector('#orderIdInput2').value;

    console.log(orderIdInput2)

    fetch(`http://localhost:9999/QueueManagement/read/${orderIdInput2}`)
    .then((response) => {
        if (response.status != 200) {
            console.log(`RESPONSE CODE: ${response.status}`);
            return;
        }
        return response.json();
    })
    .then( (data) => {
        console.log(data);
        let displayStringFname = data.forename;
        outputBoxFname.value = displayStringFname;
        let displayStringSname = data.surname;
        outputBoxSname.value = displayStringSname;
        let displayStringEmail = data.email;
        outputBoxEmail.value = displayStringEmail;
        let displayStringPosition = data.position;
        outputBoxPosition.value = displayStringPosition;
    })
    .catch( (error) => {
        console.log(`ERROR: ${error}`)
    });
};

submitBtnRead.addEventListener('click', (event) => {
    event.preventDefault()
    fetchOrder();
})