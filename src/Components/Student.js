import React from 'react'

function Student(props) {
  return (
    <div className='flex justify-between border rounded-md border-slate-300 px-4 py-2 items-center mt-2 hover:-translate-y-1 duration-300 hover:shadow-md'>
      <div>
        <h1 className='font-bold text-lg'>{props.name}</h1>
        <h1>Roll No:{props.rollno}</h1>
        </div>
        {props.fav? <button className="bg-red-500 text-white w-40 h-fit p-2  rounded-md">Added to Favourite</button> :
        <button className="bg-green-500 text-white h-fit w-40 p-2 rounded-md" onClick={()=>props.handlefav(props.rollno)}>Add to Favourite</button>}
    </div>
  )
}

export default Student
