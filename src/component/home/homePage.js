import React,{useState} from 'react';
import {Link} from 'react-router-dom';

const HomePage = ()=>{
    const [ inputs, setInputs] = useState([])

    const AddInputBox = () =>{
        setInputs([...inputs,{inputId:inputs.length}]);
    }

    return(
        <div className='buttonBox'>
            <Link to = "/home">
            <h2>Please click the button to display the input box</h2>
            <button className='btn-btn' onClick={AddInputBox}>Home</button>
            {inputs.map((input)=>(<div key = {input.inputId}><input type = 'text'></input></div>))}
            </Link>
        </div>
            
);
}
export default HomePage;
