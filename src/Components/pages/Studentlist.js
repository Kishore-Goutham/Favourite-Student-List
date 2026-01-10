import React, { useState } from 'react'
import Student from '../Student'
import Navbar from '../Navbar'
import { dataContext } from '../../App'
import { useContext } from 'react'
import toast from 'react-hot-toast'
import Footer from '../Footer'

function Studentlist() {
    let students = useContext(dataContext)
    let{ studentlist, setStudentlist ,favstudentlist,setfavstudentlist } = students;

    let[student,setStudent] = useState({fav:false})

    function handlefav(id){
      let filtered = studentlist.filter((item)=>{
            return item.rollno===id
      })
      setfavstudentlist([...favstudentlist,...filtered])

      let fav = studentlist.map((item)=>{
          if(item.rollno===id){
            return {...item,fav:true}
          }else{
            return item;
          }
      })
      setStudentlist(fav);
      toast.success("Added to favourites");
    }

    function handleChange(event){
        let value = event.target.value;
        let key = event.target.id
        setStudent({...student,[key]:value})
    }

    function handleClick(){
       if("rollno" in student && "name" in student){
         setStudentlist([...studentlist,student])
             setStudent({fav:false})
       }
    }

    let list = studentlist.map((item,key)=>{
        return <Student key={key} rollno={item.rollno} name={item.name} fav ={item.fav} handlefav={handlefav} />
    })
  return (
    <div className='px-5 py-2'>
        <div className='border'>
        <Navbar/>

        <div className='mt-5 mb-6 px-10 md:w-1/2'>
        <h1 className='font-bold text-2xl border-b'>Student List</h1>

        <div className='my-5'>
          <p className='mb-2 font-medium text-lg text-slate-500'>Add Student</p>
          <input className='border border-slate-400 p-2 rounded-md' id='rollno' placeholder='Roll.no' onChange={handleChange}/>
          <input className='border border-slate-400 p-2 rounded-md mt-1 md:ml-2' id='name' placeholder='Student Name' onChange={handleChange}/>
          <button className='bg-blue-500 p-2 w-16 text-white rounded-md ml-5' onClick={handleClick}>Add</button>
        </div>

        <p className='mt-5 mb-3 font-medium text-lg text-slate-500'>Select your favourite students</p>
        {list}
        </div>
        </div> 

        <Footer/>
        
    </div>
  )
}

export default Studentlist