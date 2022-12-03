import React, { createContext, useEffect, useState} from 'react';
import axios from 'axios';

export const AuthLoginInfo = createContext({});
export function AuthLogin(props) {
  const [user, setUser] = useState();
  useEffect(() => {
    console.log("here now")
    axios.get("http://localhost:8000/user", { withCredentials: true}).then(res => {
      setUser(res.data)
    })
  }, []);
  return (
    <AuthLoginInfo.Provider value={user}>{props.children}</AuthLoginInfo.Provider>
  )
}
