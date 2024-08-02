import React from "react";
import  UserContext  from '../Context/UserContext';

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null)
  return (

    <UserContext.Provider value={{ user, setUser }}>
      {children}
      {/* kuch change */}
    </UserContext.Provider>
  )
}
export default UserContextProvider