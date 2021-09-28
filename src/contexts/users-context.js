import { createContext, useState } from 'react';
import axios from 'axios'

const UsersContext = createContext();

const UsersProvider = ({children}) => {

  const [users, setUsers] = useState([]);

  const refreshUsers = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

    setUsers(data);
  }
  return (
    <UsersContext.Provider
      value={{
        users,
        refreshUsers
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export { UsersContext, UsersProvider}