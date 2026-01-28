let queue = [];

function bookTicket() {
    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    queue.push(name); // FCFS add
    document.getElementById("msg").innerText =
        name + " booked ticket. Queue Number: " + queue.length;

    document.getElementById("name").value = "";
    displayQueue();
}

function serveCustomer() {
    if (queue.length === 0) {
        alert("No customers in queue");
        return;
    }

    let served = queue.shift(); // FCFS serve
    alert(served +" :Go into the theater and take your seat");
    displayQueue();
}

function displayQueue() {
    let list = document.getElementById("queueList");
    list.innerHTML = "";

    queue.forEach((customer, index) => {
        let li = document.createElement("li");
        li.innerText = (index + 1) + ". " + customer;
        list.appendChild(li);
    });
}
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}



