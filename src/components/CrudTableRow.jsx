import React from 'react'

const CrudTableRow = ({task}) => {
    return (
        <tr>
            <td>{task.desc}</td>
            <td>{task.state}</td>
            <td>
                <button>
                    Update
                </button>
                <button>
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default CrudTableRow
