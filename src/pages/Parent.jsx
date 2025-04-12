import React from 'react'

const Parent = () => {

    const recieveProduct = (data) => {
        console.log(data.name);
    }
  return (
    <div>
      <Child sendata={recieveProduct}/>
    </div>
  )
}
const Child = ({sendata}) => {
    return (
        <div >
            <SubChild sendata={sendata} />
       </div>
   ) 
}

const SubChild = ({sendata}) => {
    const obj = {
        name: "Phone",
        price: 20000,
        stock: "Available"
    }
    const hello=()=>{
        alert("i AM A function");
    }
   
    const handleClick = () => {
        sendata(obj)
        sendata(hello)
        }
        
        
    
    return (
        <div>
           <button className='btn btn-primary m-5' onClick={handleClick}>Click Me!!</button>
        </div>
    )
}

export default Parent
