let heading = document.getElementById("heading") ;
heading.innerHTML += " HELLO SRICITY";

let divisions = document.getElementsByClassName("IIIT");
for(i = 0 ; i < divisions.length ; i++){
    divisions[i].innerHTML = "This is Block number : " + (i+1);
}

let button = document.createElement("button");
button.innerText = "Click Me";
button.style.backgroundColor = "red";
button.style.color = "white";
document.body.insertBefore(button,document.body.firstChild);

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