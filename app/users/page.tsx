import React from 'react'

// we define the shape of the user object
interface User {
  id: number
  name: string
  email: string
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', 
  {
    next: {revalidate:10} // this is the revalidate property that we can use to set the revalidation time
  })
  const users: User[] = await response.json()
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.id}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersPage
