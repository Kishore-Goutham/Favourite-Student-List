import React from 'react'


function FavStudent(props) {
  return (
    <div className='flex justify-between border rounded-md border-slate-300 px-4 py-2 items-center mt-2 '>
      <div>
        <h1 className='font-bold text-lg'>{props.name}</h1>
        <h1>Roll No:{props.rollno}</h1>
        </div>
        <button className="bg-red-500 text-white h-fit p-2  rounded-md" onClick={()=>props.handleRemove(props.rollno)}>Remove</button>
        
    </div>
  )

}

export default FavStudent