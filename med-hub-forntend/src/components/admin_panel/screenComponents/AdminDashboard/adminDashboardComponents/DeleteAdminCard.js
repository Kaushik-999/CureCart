import React from 'react'

function DeleteAdminCard() {
  return (
    <div className='delete-admin-card'>
        <div className='card shadow' >
            <div className="card-body py-2 text-uppercase fw-bold text-primary">
                Delete Admin
            </div>
            <div className="card-footer">
                Proceed &gt;
            </div>
        </div>
    </div>
  )
}

export default DeleteAdminCard