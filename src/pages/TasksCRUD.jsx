import React, {useState} from 'react'

const TasksCRUD = () => {

    const [showTable, setShowTable] = useState(true)

    const CreateTaskForm = () => {
        return (
            <div>
                <h1>Form</h1>
                <input className="btn btn-danger my-1 mx-1"
                    onClick={()=>setShowTable(true)}
                    type="button"
                    value="Cancel"
                />
            </div>
        )
    }

    const TasksTable = () => {
        return (
            <div className="table-responsive">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Number</th>
                    <th scope="col">Description</th>
                    <th scope="col">Designed</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Create a CRUD with React library for JavaScript</td>
                    <td>Iván</td>
                    <td><span className="badge rounded-pill bg-success">Done</span></td>
                    <td>
                        <input className="btn btn-warning mx-1"
                            onClick={()=>setShowTable(false)}
                            type="button"
                            value="Update"
                        />
                        <input className="btn btn-danger mx-1"
                            onClick={()=>setShowTable(false)}
                            type="button"
                            value="Delete"
                        />
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        )
    }

    const CreateButton = ()=>{
        return(
            <input className="btn btn-success my-1 mx-1"
                onClick={()=>setShowTable(false)}
                type="button"
                value="Create"
            />
        )
    }

    return (
        <>
            <h1 className="text-center">Tasks management</h1>
            <div className="container">
                {showTable ? <CreateButton/>  : null}
                <div className="row my-1">
                    <div className="col">
                        {showTable ? <TasksTable/> : <CreateTaskForm/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TasksCRUD
