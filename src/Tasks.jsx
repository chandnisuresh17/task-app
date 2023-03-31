import React from "react";
import Task from './Task'

function Tasks({tasks, onClick, onReminder}) {
    return (
        <div>
            {tasks.map((task)=> (
                <Task key = {task.id} ts={task} onClick = {onClick} onReminder = {onReminder} />
            ))}
        </div>
    )
}

export default Tasks