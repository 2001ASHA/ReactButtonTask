import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const DashBoardPage = ()=>{
    const [textAreas,setTextArea] = useState([])

    const AddButton=()=>{ 
        setTextArea([...textAreas,{textId:textAreas.length}])
    }

    return(
        <Link to ="/dashboard">
        <div className='buttonBox'>
        <h2>Please click the button to display the Button</h2>
            <button  className='btn-btn' onClick={()=>AddButton(true)}>DashBoard</button>
            {textAreas.map((textArea)=>(<div key = {textArea.textId}><button>button{textArea.textId}</button></div>))}
        </div>
        </Link>
            
);
}
export default DashBoardPage;
