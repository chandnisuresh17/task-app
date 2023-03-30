import {React} from "react";
import  {GiSkullCrossedBones} from 'react-icons/gi'

function Task({ts, onClick}) {
    return (        <div style =  {{ background : "grey"}}>
        <h2>{ts.text} <GiSkullCrossedBones style={{color:'brown'}} onClick={() => onClick(ts.id)} /> </h2>
        </div>
        )
    }
export default Task