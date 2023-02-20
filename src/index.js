import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oditcgulrjrjhkfwnfvc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kaXRjZ3VscmpyamhrZnduZnZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY5MjA4NjksImV4cCI6MTk5MjQ5Njg2OX0.SqUA_uA8OB-r2wyzq0rd6JTWyWlBHy4nT627aTtXiIQ'
const supabase = createClient(supabaseUrl, supabaseKey)


const tasks = document.querySelector(".tasks");

const fetchToDos = async () => {
    const {data , error} = await supabase
        .from('todos')
        .select()
    data.forEach(task => {
      if(task.completed == true){
        tasks.innerHTML += `<div class="task"><p class="indiTask check">${task.tasks}</p></div>`;
    
      }
    })
  }
fetchToDos();