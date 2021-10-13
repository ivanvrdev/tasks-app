import React from 'react'

const DeleteTask = () => {
    return (
        <input className="btn btn-danger mx-1"
            onClick={()=>alert('Delete')}
            type="button"
            value="Delete"
        />
    )
}

const UpdateTask = () => {
    return (
        <input className="btn btn-warning mx-1"
            onClick={()=>alert('Update')}
            type="button"
            value="Update"
        />
    )
}

const CreateTask = () =>{
    return (
        <input className="btn btn-success my-1 mx-1"
            onClick={()=>alert('New')}
            type="button"
            value="Create"
        />
    )
}

const ReadTasks = () =>{
    return (
        <input className="btn btn-primary my-1 mx-1"
        onClick={()=>alert('Tasks')}
            type="button"
            value="Read"
        />
    )
}

export {DeleteTask, UpdateTask, CreateTask, ReadTasks}
