import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({tasks}) => {
    
    return (
        <div>
            <h2>Tasks table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>State</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.length === 0 ? <tr><td colSpan = "3">No data</td></tr> : tasks.map(task => <CrudTableRow key = {task.id} task = {task}/> )}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
