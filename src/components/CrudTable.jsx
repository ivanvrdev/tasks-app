import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({users, setUserToUpdate, deleteUser}) => {
    
    return (
        <div>
            <h2>Users table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length === 0 ? (
                        <tr><td colSpan = "3">No data</td></tr>
                    ) : (
                        users.map(user => 
                            <CrudTableRow 
                                key = {user.uid}
                                user = {user}
                                setUserToUpdate = {setUserToUpdate}
                                deleteUser = {deleteUser}
                            /> 
                        )
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable
