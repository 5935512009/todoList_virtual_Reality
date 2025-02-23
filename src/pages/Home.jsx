import React,{useState} from "react";
import './home.css'
function Home() {
    const [todos,setTodos] = useState([]); // set todos list array
    // console.log(todos);

    // function input todolist
    function addTodo(){
        const input = document.getElementById("todoList_input").value; // get value
        if(input ==="") return; // if no value return
        // console.log("input before change"+input);
        const newTodo = {
            id: Date.now(),
            text: input,
            completed: false
        }
        // list todo (ต่อ query)
        setTodos([...todos,newTodo])

        // clear value
        document.getElementById("todoList_input").value="";
    }

    // check completed todoList function
    function completeTodoList(id){
        console.log(id);
        setTodos(todos.map((todo)=>(
            // check todoList ว่า id ตรงกันใหมหากตรงกันจะเปลี่ยนเป้นค่าตรงข้่ามคือ  completed กับ !completed
            todo.id === id ? {...todo, completed : !todo.completed } : todo
        )))
    }

    // check delete todoList function
    function deleteTodoList(id){
        console.log(id);
        // จะทำการ filter ข้อมูลที่มี id ตรงกันออก
        setTodos(todos.filter(todo => todo.id !== id))
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
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                    {todo.text}
                    <div>
                        <button className="check_button"  onClick={()=>(completeTodoList(todo.id))}>check</button>
                        <button className="delete_button" onClick={()=>(deleteTodoList(todo.id))}>delete</button>
                    </div>
                </li>

            ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
