import React, { useState } from 'react'
import User from './User'
import Modal from './modal'
import './Table.css'

function Table({ users, onUpdateUser }) {
    // state for conditional render of edit form
    const [isEditing, setIsEditing] = useState(false);
    // state for edit form inputs
    const [editModal, setEditModal] = useState({
        id: "",
        name: "",
        email: "",
        phone: ""
    })

    // when PATCH request happens; auto-hides the form, pushes changes to display
    function handleUserUpdate(updatedUser) {
        setIsEditing(false);
        onUpdateUser(updatedUser);
    } 

    // capture user input in edit form inputs
    function handleChange(e) {
        setEditModal({
            ...editModal,
            [e.target.name]: e.target.value
        })
    }

    // needed logic for conditional rendering of the form - shows the customer you want when you want them, and hides it when you don't
    function changeEditState(User) {
        if (User.id === editModal.id) {
            setIsEditing(isEditing => !isEditing) // hides the form
        } else if (isEditing === false) {
            setIsEditing(isEditing => !isEditing) // shows the form
        }
    }

    // capture the customer you wish to edit, set to state
    function captureEdit(clickedUser) {
        let filtered = users.filter(User => User.id === clickedUser.id)
        setEditModal(filtered[0])
    }

    return (
        <div className='container my-4 shadow-lg p-3 mb-5 bg-body-secondary rounded'>
            <h1>Table Using Api Data</h1>
            {isEditing ?
                (<Modal
                    editModal={editModal}
                    handleChange={handleChange}
                    handleUserUpdate={handleUserUpdate}
                />) : null}
            <table className=" table table-bordered table-sm">
                <thead className='table-dark'>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Modify User</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user =>
                        <User
                            key={user.id}
                            User={user}
                            captureEdit={captureEdit}
                            changeEditState={changeEditState}
                        />)}
                </tbody>
            </table>
        </div>
    )
}
export default Table