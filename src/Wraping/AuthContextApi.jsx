import React, { useState,createContext } from 'react'

//step1 create a context
 export const Auth= createContext();

const AuthContextApi = ({children}) => {
    const [isLoggedin, setisLoggedin] = useState(true);

    const login = () => {
        setisLoggedin(true); 
    }
    const logout = () => {
        setisLoggedin(false);     
    }
  return (
      <div>
          
          {/* Step2 MAKE A PROVIDER */}
          <Auth.Provider value={{isLoggedin,login,logout}}>
              {children}
      </Auth.Provider>
    </div>
  )
}

export default AuthContextApi
