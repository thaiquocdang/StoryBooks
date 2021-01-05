import React, { useState } from 'react'
import { axiosWrapper } from '../api/api'
const UserList = () => {
  const [users, setUsers] = useState([])
  const [userInput, setUserInput] = useState([])
  const [userFound, setUserFound] = useState([])

  //get all users
  const getUser = async () => {
    const response = await axiosWrapper('/userlist', 'get')
    console.log(response.data)

    setUsers(response.data)
  }

  //find user by name
  const handleFindUser = async (e) => {
    e.preventDefault()

    //use params /:params
    // const res = await axiosWrapper(`/finduser/${findUser}`, 'post', findUser)

    //use query
    const res = await axiosWrapper(
      `/finduser?findUser=${userInput}`,
      'get',
      userInput
    )
    setUserFound(res.data)
  }
  console.log(userInput)

  return (
    <div>
      <button onClick={getUser}>Get userList</button>
      <div className='userList'>
        {users &&
          users.map((user) => (
            <div className='user' key={user.googleId}>
              <div>Google ID: {user.googleId}</div>
              <div>First name: {user.firstName}</div>
              <div>Family name: {user.lastName}</div>
            </div>
          ))}
      </div>
      <div>
        <form onSubmit={handleFindUser}>
          <input
            type='text'
            onChange={(e) => setUserInput(e.target.value)}
          ></input>
          <button>Find user</button>
        </form>
        <div>
          {userFound.map((user) => (
            <div key={user.googleId}>
              <div>Google ID: {user.googleId}</div>
              <div>First name: {user.firstName}</div>
              <div>Family name: {user.lastName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserList
