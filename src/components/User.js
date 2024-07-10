import React from 'react'
import './User.css'

function User({ User, User: { id, name, email, phone }, captureEdit, changeEditState }) {

    return (
        <tr key={id} >
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>
               <center> <button type="button" class="btn btn-dark"
                 onClick={() => {
                    captureEdit(User);
                    changeEditState(User)
                }}>
                    update details
                </button></center>
            </td>
        </tr>
 
    )
}
export default User