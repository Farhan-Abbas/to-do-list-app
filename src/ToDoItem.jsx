import './App.css';

export default function ToDoItem({ text, onDelete }) {
    return (
        <div style={{padding:'5px 0px', width:'180px', height: '200px'}}>
            <div style={{padding:'17px 17px', fontSize:'21px', overflow: 'hidden', textOverflow: 'ellipsis', overflowWrap: 'break-word'}}>
                {text}
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button className='button' onClick={onDelete} 
                style={{
                    width: '55px', 
                    height: '32px', 
                    fontSize: '10px', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    border: "0px", 
                    }}
                >
                    Delete</button>
            </div>
        </div>
    );
}