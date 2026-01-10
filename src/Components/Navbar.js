import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='sticky top-0'>
        <h1 className='bg-blue-500 text-white text-center text-4xl font-semibold p-4'>Favourite  Student  List</h1>

        <div className='flex justify-center gap-10  border-b pt-2 text-lg font-medium text-slate-500'>
            <h1 className='hover:text-blue-400 hover:border-blue-400 hover:border-b-2 border-b-2 border-transparent pb-2'><Link to={'/'}>Student List</Link></h1>
            <h1 className='hover:text-blue-400 hover:border-blue-400 hover:border-b-2 border-b-2 border-transparent pb-2'><Link to={"/FavouriteStudents"}>Favourite Students</Link></h1>
        </div>
        
    </div>
  )
}

export default Navbar