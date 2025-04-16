
import React, { createContext, useContext } from 'react'

// step1 create a context
const data = createContext();

const ContextAPI = () => {
    const obj = {
        name: "vidhi",
        email: "vidhi@gmail.com",
        study:"B.tech"
    }
    

  return (
    <div>
          <data.Provider value={{obj,clicked}}>
              <GrandChild/>
          </data.Provider>
    </div>
  )
}
const clicked = () => {
    alert("You have Clicked");
 }
const Child = () => {
    return (
        <>
        </>
    )
}
const GrandChild = () => {
  const {obj,clicked} = useContext(data)
    return (
        <>
            <h1>{obj.name}
                {obj.email}
            </h1>

            <button onClick={clicked}>Click Alert</button>
        </>
    )
}

export default ContextAPI
