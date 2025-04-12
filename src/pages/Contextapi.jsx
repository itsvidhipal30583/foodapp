import React, { createContext, useContext } from 'react'


const user = createContext();
const Contextapi = () => {
    const email="abc@gmail.com"
   
  return (
    <div>
          <user.Provider value={email}>
              <Child/>
        </user.Provider>
    </div>
  )
}

const Child = () => {
    const data = useContext(user);
    return (
        <>
            <h3>{data }</h3>
        </>
    )
    
}

export default Contextapi
