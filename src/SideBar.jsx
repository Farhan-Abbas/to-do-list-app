import React, { useState } from 'react';
import './SideBar.css'; // Import the CSS file
import ToDoList from './ToDoList';
import './App.css';

export default function SideBar() {
    const [lists, setLists] = useState([]);
    const [activeListName, setActiveListName] = useState('');
    const [newListName, setNewListName] = useState(''); // New state for the input field

    const handleListChange = (listName) => {
        setActiveListName(listName);
    };

const addList = () => {
    setLists([...lists, { name: newListName, items: [] }]);
    setActiveListName(newListName); // Select the new list
    setNewListName(''); // Clear the input field
};

    const handleChange = (event) => {
        setNewListName(event.target.value); // Update newListName instead of activeListName
    };

    const deleteList = (listName) => {
        setLists(lists.filter(list => list.name !== listName));
    };
    
return (
    <div className='main'>
        <div className="sidebar">
            <h1>Your Lists</h1>

            <ol>
            {lists.map(list => (
                <li key={list.name} style={{display: 'flex', alignItems: 'center'}}>
                    <button className="list-button" onClick={() => handleListChange(list.name)} style={{fontSize: '15px', marginRight: '10px'}}>
                        {list.name}
                    </button>
                    <button className='button' onClick={() => deleteList(list.name)}>Delete</button>
                </li>
            ))}
            </ol>

            <div>
            <input type="text" value={newListName} onChange={handleChange} placeholder={'Grocery'} style={{marginRight: '10px'}} />
            <button className='button' onClick={addList}>Add New List</button>
            </div>

        </div>

        {lists.map(list => (
            list.name === activeListName && 
            <ToDoList 
                key={list.name}
                listName={list.name} 
                items={list.items} 
                setItems={newItems => {
                    setLists(lists.map(l => 
                        l.name === list.name ? { ...l, items: newItems } : l
                    ));
                }} 
            />
        ))}

    </div>
);
}
