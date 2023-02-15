tasks = document.querySelector(".tasks");
button = document.querySelector(".addTask");
input = document.getElementById("input");
container = document.querySelector(".container");
checkbox = document.getElementById("checkbox");
indiTask = document.querySelectorAll(".indiTask");
button.addEventListener('click', e => {
    e.preventDefault();
    let task = input.value;
    tasks.innerHTML += `<div class="task"> <input type="checkbox" name="checkbox" id="checkbox"> <p class="indiTask">${task}</p></div>`
    input.value = "";
    indiTask = document.querySelectorAll(".indiTask");
    indiTask.forEach(indi => {
      let checkbox1 = indi.previousElementSibling;
      checkbox1.addEventListener("click", e => {
        if(indi.classList.contains("check")){
          indi.classList.remove("check");
        } else {
          indi.classList.add("check");
        }
      })
    })

})

input.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
        event.preventDefault();
      // Trigger the button element with a click
        let task = input.value;
        tasks.innerHTML += `<div class="task"> <input type="checkbox" name="checkbox" id="checkbox"> <p class="indiTask">${task}</p></div>`
        input.value = "";
        indiTask = document.querySelectorAll(".indiTask");
        indiTask.forEach(indi => {
          let checkbox1 = indi.previousElementSibling;
          checkbox1.addEventListener("click", e => {
            if(indi.classList.contains("check")){
              indi.classList.remove("check");
            } else {
              indi.classList.add("check");
            }
          })
        })
    }
  });
indiTask.forEach(indi => {
    let checkbox1 = indi.previousElementSibling;
    checkbox1.addEventListener("click", e => {
      if(indi.classList.contains("check")){
        indi.classList.remove("check");
      } else {
        indi.classList.add("check");
      }
    })
  })
