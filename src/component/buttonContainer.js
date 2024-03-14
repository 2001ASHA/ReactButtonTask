import React,{useState} from 'react';

const ButtonContainer = ()=>{
    const [textAreas,setTextArea] = useState([])
    const [ inputs, setInputs] = useState([])

    const AddInputTeaxtArea=()=>{ 
        setTextArea([...textAreas,{textId:textAreas.length}])
    }

    const AddInputBox = () =>{
        setInputs([...inputs,{inputId:inputs.length}]);
    }
    return(
        <div className='buttonBox'>
            <button className='btn-btn' onClick={AddInputBox}>Input</button>
            {inputs.map((input)=>(<div key = {input.inputId}><input type = 'text'></input></div>))}
            <button  className='btn-btn' onClick={()=>AddInputTeaxtArea(true)}>Button</button>
            {textAreas.map((textArea)=>(<div key = {textArea.textId}><textarea></textarea></div>))}
            </div>
            
);
}
export default ButtonContainer;