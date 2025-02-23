import React,{useState} from "react";

function Home() {
    const [todos,setTodos] = useState([]);
    console.log(todos);
  return (
    <div className="home">
      <div className="home_main">Virtual Reality Todolist</div>
      <div className="home_details">
        <div className="home_details_input">
          <input type="text" id="todoList_input"/>
          <button className="submit_button" onClick={(e)=>setTodos(document.getElementById("todoList_input").value)}>Add Todo</button>
        </div>
        <ul>
            {todos.map((todo)=>(
                <li key={todo.id}>{todo.text}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
