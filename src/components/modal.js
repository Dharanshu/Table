import React from 'react'
import './Modal.css'

function modal({ editModal, handleUserUpdate, handleChange }) {
    let { id, name, email, phone } = editModal

    // PATCH request; calls handleCustomerUpdate to push changes to the page
    function handleEditModal(e) {
        e.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editModal),
        })
            .then(resp => resp.json())
            .then(updatedUser => { 
                handleUserUpdate(updatedUser)
            })
    }

    return (
        <>
            {/*         
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Your details</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form  onSubmit={handleEditModal} >
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Name</label>
                                    <input  className="form-control"  type="text" name="name" value={name} onChange={handleChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label fw-bold">Email</label>
                                    <input className="form-control"  name="email" value={email} onChange={handleChange} aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-bold">Phone</label>
                                    <input  className="form-control"   name="phone" value={phone} onChange={handleChange} />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-success" data-bs-dismiss="modal" >Update details</button>
                        </div>
                    </div>
                </div>
            </div> */}



            <div className='container my-2 shadow-lg p-3 mb-5 bg-body-primary rounded'>
                <center><h4>Edit User</h4></center>
                <form onSubmit={handleEditModal}>
                    <input type="text" name="name" value={name} onChange={handleChange} />
                    <input type="email" name="email" value={email} onChange={handleChange} />
                    <input type="phone" name="phone" value={phone} onChange={handleChange} />
                    <button type="submit" className='btn btn-dark mx-2'>Submit</button>
                    <button type="submit" className='btn btn-danger' data-bs-dismiss="form">Close</button>
                </form>
            </div>

        </>
    )
}
export default modal;