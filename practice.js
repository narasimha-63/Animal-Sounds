// Q1: Append text to an H2 element
document.getElementById("heading").innerHTML += " Hello SriCity";

// Q2: Access multiple divs by class name and modify them
let divs = document.getElementsByClassName("IIIT");
for (let i = 0; i < divs.length; i++) {
    divs[i].innerText = "This is div number " + (i + 1);
}

// Q3: Create a button and insert it as the first element inside the body
let button = document.createElement("button");
button.innerText = "Click Me";
button.style.backgroundColor = "red";
button.style.color = "white";
document.body.insertBefore(button, document.body.firstChild);

// Q4: Create a toggle button for dark mode and light mode
let toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", function () {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        toggleButton.innerText = "Dark Mode";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        toggleButton.innerText = "Light Mode";
    }
});
