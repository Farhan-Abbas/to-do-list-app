import { useState } from "react";
import ToDoItem from "./ToDoItem";
import './ToDoList.css';
import './App.css';

export default function ToDoList({listName, items, setItems}){
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const addItem = () => {
        setItems([...items, inputValue]);
        setInputValue("");
    };

    const deleteItem = (indexToRemove) => {
        setItems(items.filter((_, index) => index !== indexToRemove));
    };

    return (
        <div className='to-do-list'>
            
            <div className='list-top-name'>
                {listName}
            </div>

            <div className='list'>
                <ol>
                    {items.map((item, index) => (
                        <li key={index}>
                            <ToDoItem text={item} onDelete={() => deleteItem(index)} />
                        </li>
                    ))}
                </ol>
            </div>
            
            <div>
                <input type="text" value={inputValue} placeholder={'Enter a new task...'} onChange={handleChange} style={{marginRight: '10px', width: '140px', height: '25px'}}></input>
                <button className='button' onClick={addItem}>Add Item</button>
            </div>

        </div>
    )
}