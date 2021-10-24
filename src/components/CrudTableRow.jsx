import React from 'react'

const CrudTableRow = ({user, setUserToUpdate, deleteUser}) => {

    let {username, role, uid} = user;

    return (
        <tr>
            <td>{username}</td>
            <td>{role}</td>
            <td>
                <button
                    onClick = {()=>setUserToUpdate(user)}
                >
                    Update
                </button>
                <button
                    onClick = {()=>deleteUser(uid)}
                >
                    Delete
                </button>
            </td>
        </tr>
    )
}

export default CrudTableRow
