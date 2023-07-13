import React from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from '../features/userSlice';

const UserContainer = () => {
    const {users, isLoading, error} = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [users])
  return (
    <div>
      <h2>Users - {users.length}</h2>
      {isLoading && <div>Loading...</div>}
      {error&& <div>Error</div>}
      <div className="user-container">
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
        ))}
      </div>
    </div>
  )
}

export default UserContainer
