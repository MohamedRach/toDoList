tasks = document.querySelector(".tasks");
button = document.getElementById("add");
input = document.getElementById("input");

button.addEventListener('click', e => {
    e.preventDefault();
    let task = input.value;
    const para = document.createElement("p");
    const node = document.createTextNode(task);
    para.appendChild(node);
    tasks.appendChild(para);
    input.value = "";
})
input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
        event.preventDefault();
      // Trigger the button element with a click
        let task = input.value;
        const para = document.createElement("p");
        const node = document.createTextNode(task);
        para.appendChild(node);
        tasks.appendChild(para);
        input.value = "";
    }
  });