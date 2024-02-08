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
                <u>{listName}</u>
                
            </div>
            <br />

            <div className='list'>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', listStyle: 'none', padding: 0}}>
                    {items.map((item, index) => (
                        <div key={index} className="item-border">
                            <ToDoItem text={item} onDelete={() => deleteItem(index)} />
                        </div>
                    ))}
                </div>
            </div>
            
            <div>
                <input type="text" value={inputValue} placeholder={'Enter a new task...'} onChange={handleChange} style={{marginRight: '10px', width: '140px', height: '25px'}}></input>
                <button className='button' onClick={addItem}>Add Item</button>
            </div>

        </div>
    )
}


