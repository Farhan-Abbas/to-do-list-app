import './App.css';

export default function ToDoItem({ text, onDelete }) {
    return (
        <div style={{padding:'5px 0px', width:'100px'}}>
            <div style={{padding:'10px 10px', fontSize:'15px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                {text}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className='button' onClick={onDelete} style={{width: '50px', height: '25px', fontSize: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Delete</button>
            </div>
        </div>
    );
}