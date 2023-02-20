import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oditcgulrjrjhkfwnfvc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kaXRjZ3VscmpyamhrZnduZnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5MjA4NjksImV4cCI6MTk5MjQ5Njg2OX0.SqUA_uA8OB-r2wyzq0rd6JTWyWlBHy4nT627aTtXiIQ'
const supabase = createClient(supabaseUrl, supabaseKey)

// selecting all the elements we need
const tasks = document.querySelector(".tasks");
const button = document.querySelector(".addTask");
const input = document.getElementById("input");
const container = document.querySelector(".container");
const checkbox = document.getElementById("checkbox");
const edits = document.querySelectorAll("#edit");
let indiTask = document.querySelectorAll(".indiTask");
// updating a task
const updateTask = async (completed,task) => {
  const {data, error} = await supabase
    .from('todos')
    .update([{'completed':completed}])
    .eq('tasks',task)
    .select();
  
}
// a function to check if the task i completed
const checked = () => {
  indiTask = document.querySelectorAll(".indiTask");
  indiTask.forEach(indi => {
      let checkbox1 = indi.previousElementSibling;
      
      checkbox1.addEventListener("click", e => {
        if(indi.classList.contains("check")){
          indi.classList.remove("check");
          updateTask(false,indi.textContent);
        } else {
          indi.classList.add("check");
          updateTask(true,indi.textContent);
          setTimeout(() => {
            let parent = indi.parentElement;
            parent.remove(indi);
          },1300);
          
        }
      })
    })
}
// adding data to the database
const AddToDos = async (task, completed) => {
  const {data, error} = await supabase
    .from('todos')
    .insert([{'tasks':task, 'completed': completed }]);
  
}

// fetching data from the database
const fetchToDos = async () => {
  const {data , error} = await supabase
      .from('todos')
      .select()
  data.forEach(task => {
    if(task.completed != true){
      tasks.innerHTML += `<div class="task"> <input type="checkbox" name="checkbox" id="checkbox"> <p class="indiTask">${task.tasks}</p></div>`;
      checked();
    }
  })
}
fetchToDos();

// adding a task after a button click o an enter press
button.addEventListener('click', e => {
    e.preventDefault();
    let task = input.value;
    tasks.innerHTML += `<div class="task"> <input type="checkbox" name="checkbox" id="checkbox"> <p class="indiTask">${task}</p></div>`
    input.value = "";
    AddToDos(task,false);
    checked();
})

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        let task = input.value;
        tasks.innerHTML += `<div class="task"> <input type="checkbox" name="checkbox" id="checkbox"> <p class="indiTask">${task}</p></div>`
        input.value = "";
        AddToDos(task,false);
        checked();
    }
  });
 
//update a task
edits.forEach(edit => {
  edit.addEventListener('click', e => {
    e.preventDefault();
    let value = edit.previousElementSibling;
    let parent = edit.parentElement;
    input.value = value;
    tasks.remove(parent);
  })
})