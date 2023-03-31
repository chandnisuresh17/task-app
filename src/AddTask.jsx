import React from "react";
import {useState} from 'react'
function AddTask({onAdd}) {
    const [text, setText] = useState('')
    const [reminder, setReminder] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if(!text){
            alert("Fields should not be blank")
            return
        }
        onAdd({text, reminder})
        setText('')
        setReminder(false)
    }
return(
    <div>
        <form onSubmit = {onSubmit}>
            <label>Task Detail:</label>
            <input type = 'text' placeholder="Add task" value = {text} onChange={(e) => setText(e.target.value)}/>
            <label>Reminder</label>
            <input type="Checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            <input type = 'submit' value = 'Add task' />

        </form>
    </div>
)
}
export default AddTask
