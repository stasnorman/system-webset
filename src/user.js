import React from 'react'

const User = ({user}) => {
    return (
        <div>
            <center><h1>API Call Json- User List</h1></center>
            {
            user.map((emp) => (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{emp.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{emp.email}</h6>
                    </div>
                </div>
            ))
            }
        </div>
    )
};

export default User