import React from 'react'
import {DeleteTask, UpdateTask, CreateTask, ReadTasks} from '../components/Buttons'

const TasksCRUD = () => {
    return (
        <div>
            <CreateTask/>
            <ReadTasks/>
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
                        <UpdateTask/>
                        <DeleteTask/>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    )
}

export default TasksCRUD
