import { useState } from "react";

const ListUI = ({itemsList, removeItem, editTodo}) => {
    return (
           itemsList && 
            <ul>
                {
                    itemsList.map( (item, index) => {
                        return(
                            <div className="todoWrapper" key={index}>
                                <Todo removeItem={removeItem} item={item} index={index} editTodo={editTodo}></Todo>
                            </div>
                        );
                    })
                }
            </ul>
    );
}
 
export default ListUI;

function Todo ({removeItem, item, index, editTodo}) {
    const [editing, setEditing] = useState(false);
    const [todo, setTodo] = useState(item);

    const handleEdit = () => {
        setEditing(!editing);
    }

    function handleSubmit(event) {
        event.preventDefault();
        editTodo(index, todo); //grandparent function since todoList is the single source of truth
        setEditing(!editing);
    }
    return (
        <div>
            {editing ? 
                (
                    <>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="todo"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                            />
                            {/* <button onClick={()=>setEditing(false)}>Cancel</button> */}
                            <button type="submit" value="Submit" id="submitButton">
                                Save
                            </button>
                        </form>
                    </>
                ) : 
                (
                    <div className="task">
                        <li>{item}</li>
                        <button className="button" onClick={() => removeItem(index)}>Remove item</button>
                        <button className="button" onClick={handleEdit}>Edit item</button>
                    </div>
                )
            }
        </div>
    );
}
 