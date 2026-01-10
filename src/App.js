import React, { useState } from 'react'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import Studentlist from './Components/pages/Studentlist'
import FavStudentlist from './Components/pages/FavStudentlist'
import { createContext } from 'react'
import { Toaster } from 'react-hot-toast'


let dataContext = createContext();

function App() {

    let[studentlist, setStudentlist] = useState([
        {
            rollno : 1,
            name: "Kishore",
            fav : false
        },
         {
            rollno : 2,
            name: "Goutham",
            fav : false
        },
         {
            rollno : 3,
            name: "John",
            fav : false
        },
         {
            rollno : 4,
            name: "Fedrick",
            fav : false
        },
        
    ]);

    let[favstudentlist,setfavstudentlist]= useState([
      
    ])
    
  return (
    <div>
         <Toaster position="top-right" />
        <dataContext.Provider value={{studentlist,setStudentlist,favstudentlist,setfavstudentlist}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Studentlist/>}></Route>
            <Route path="/FavouriteStudents" element={<FavStudentlist/>}></Route>
        </Routes>
        </BrowserRouter>
        </dataContext.Provider>
    </div>
  )
}

export default App
export {dataContext}