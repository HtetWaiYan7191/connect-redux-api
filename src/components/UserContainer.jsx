import React from 'react';
import { useSelector } from 'react-redux';

const UserContainer = () => {
    const {users, isLoading, error} = useSelector((state) => state.users)
  return (
    <div>
      <h2>Users - {users}</h2>
      {isLoading && <div>Loading...</div>}
      {error&& <div>Error</div>}
    </div>
  )
}

export default UserContainer
