import React,{useState} from "react";
import './home.css'
function Home() {
    const [todos,setTodos] = useState([]); // set todos list array
    console.log(todos);

    // function input todolist
    function addTodo(){
        const input = document.getElementById("todoList_input").value; // get value
        if(input ==="") return; // if no value return
        console.log("input before change"+input);
        const newTodo = {
            id: Date.now(),
            text: input
        }
        // list todo (ต่อ query)
        setTodos([...todos,newTodo])

        // clear value
        document.getElementById("todoList_input").value="";
    }


  return (
    <div className="home">
      <div className="home_main">Virtual Reality Todolist</div>
      <div className="home_details">
        <div className="home_details_input">
          <input type="text" id="todoList_input"/>
          <button className="submit_button" onClick={addTodo}>Add Todo</button>
        </div>
        <ul className="todo">
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
