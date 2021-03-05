'use strict';

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
            outputBox.value = displayString;
        })
        .catch((error) => console.log(error));
}

submitBtnDelete.addEventListener('click', (event) => {
    event.preventDefault()
    deleteOrder(orderIdInput);
})
