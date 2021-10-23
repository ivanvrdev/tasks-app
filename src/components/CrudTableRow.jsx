import React from 'react'

const CrudTableRow = ({task, setTaskToUpdate, deleteTask}) => {

    let {desc, state, id} = task;

    return (
        <tr>
            <td>{desc}</td>
            <td>{state}</td>
            <td>
                <button
                    onClick = {()=>setTaskToUpdate(task)}
                >
                    Update
                </button>
                <button
                    onClick = {()=>deleteTask(id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default CrudTableRow
