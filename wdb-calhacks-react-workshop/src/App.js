import './App.css';
import {useState} from 'react';
import ListUI from './components/ListUI';
import NewTask from './components/NewTask';


function App() {
  //state is the "single source of truth"
  const [todoList, setTodoList] = useState([]); // to store all of the tasks. when this changes, the whole component reacts!
  const [value, setValue] = useState(""); // stores the current state of the user input. 


  function handleChange(event) {
    setValue(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    setTodoList([...todoList, value]);
    setValue("");
  }

  function removeTodo(index) {
    const newTodos = [...todoList]; //duplicates the old list (because we don't want to modify state directly)
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  }

  function editTodo(index, newStr) {
    let newTodos = [...todoList];
    newTodos[index] = newStr
    setTodoList(newTodos); 
  }

  return (
    <div className="App"> 
      <div className="Container">
        <h2> TODO App</h2>
        <NewTask handleChange={handleChange} handleSubmit={handleSubmit} value={value}/>
        <ListUI itemsList={todoList} removeItem={removeTodo} editTodo={editTodo}/>
      </div>
    </div>
  );
}

export default App;
