import React, { useState } from 'react'

const Proptask = () => {
    const fun = (call) => {
        console.log(call)
        console.log(call.name)
    }
    return (
        <div>
            <Prop2 send={fun} />
        </div>
    )
}

const Prop2 = ({ send }) => {
    const [recieve, setrecieve] = useState({ name: 'vidhi', study: 'Btech' });
    const handleClick = () => {
        send(recieve);
    }

    return (
        <>
            <button className='btn btn-primary' onClick={handleClick}>Click</button>
        </>
    )
}

export default Proptask
