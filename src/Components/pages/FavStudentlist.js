import React from 'react'
import Navbar from '../Navbar'
import FavStudent from '../FavStudent'
import { useContext } from 'react'
import { dataContext } from '../../App'
import box from "../../Assests/box.png"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import Footer from '../Footer'

function FavStudentlist() {
  let favstudents = useContext(dataContext);

  let {favstudentlist, setfavstudentlist,studentlist, setStudentlist} = favstudents;

  function handleRemove(id){
       let filtered = favstudentlist.filter((item)=>{
            return item.rollno!==id
       })
       setfavstudentlist(filtered);

       let rfav = studentlist.map((item)=>{
           if(item.rollno===id){
            return {...item,fav:false}
           }else{
            return item;
           }
       })
       setStudentlist(rfav)
       toast.error("Removed from favourites");
  }
    
   let list = favstudentlist.map((item,key)=>{
        return <FavStudent key={key} rollno={item.rollno} name={item.name} fav ={item.fav} handleRemove={handleRemove} />
    })

  return (
     <div className='p-5'>
        <div className='border'>
        <Navbar/>

         <div className='mt-5 mb-6 px-10 md:w-1/2 m-auto text-center'>

        <h1 className='font-bold text-2xl border-b'> Favourite Student</h1>

        <div className='mt-6'>

        {list.length===0? <div>
          <img className="w-1/4 m-auto" src={box} alt=""></img>
          <h1 className='font-bold text-lg mb-5'>No favourite students yet!</h1>
          <p>Favourite list is empty. Add some students from student list </p>
          <button className='text-white bg-blue-600 p-2 mt-5 rounded-md'><Link to={"/"}>Back to Student List</Link></button>
           </div>:<div>{list}</div>}

        </div>

        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default FavStudentlist