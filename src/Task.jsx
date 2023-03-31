import {React} from "react";
import  {GiSkullCrossedBones} from 'react-icons/gi'

function Task({ts,onClick, onReminder}) {
    return (
        <div style = {{width : "100%", background: "purple"}}>
        <div className = {`${ts.reminder? 'reminder' : ''}`} style={{width : "50%"}} onDoubleClick ={() => onReminder(ts.id)}>
               <h2>{ts.text}</h2>
        </div> 
        <div>
        <h2>{ts.text} <GiSkullCrossedBones style={{color:'brown'}} onClick={() => onClick(ts.id)} /> </h2>
        </div>
        </div>
        )
    }
export default Task