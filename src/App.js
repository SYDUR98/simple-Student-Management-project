import {useState} from "react"
import './App.css';

function App() {
const [student,setStudent] =useState("");
const [studentList,setStudentList]=useState([]);
const [isEditable,setIsEditable] = useState(false);
const [editableStudent,setEditableStudent] = useState(null)


  // const changeStudent= (val)=>{
  //   setStudent(val)
  // }
  const getStudentList= (event,x)=>{
    event.preventDefault()
    
    if (x){
      const allStudent = {
        id : Date.now(),
        name : x
      }
      setStudentList([allStudent,...studentList]);
      setStudent("")
    } else{
      alert("Please provide correct name")
    }

  } 

  

  const deleteHandaler = (studentId)=>{
    const newStudent = studentList.filter((item)=>item.id !== studentId)
    setStudentList(newStudent)
  }

  const updateHandaler = (eventt,name)=>{
    eventt.preventDefault()
    if(name){
      editableStudent.name = name || editableStudent.name ; 
      setIsEditable(false);
      setStudent("");
      setEditableStudent(null);
    }

  }

  const editHandaler = (studentId)=>{
    setIsEditable (true)
    const editStudent = studentList.find((item)=>item.id === studentId)
    setEditableStudent(editStudent)
    setStudent(editStudent.name)
  }

  const presentHandelar = (studentId)=>{
    const pStudent = studentList.find((item)=> item.id === studentId);
    if(pStudent.isPresent === undefined){
      setStudentList([...studentList])
      pStudent.isPresent = true
    } else if(pStudent.isPresent = true){
      setStudentList([...studentList])
      alert("this Student Already present listed")

    }else{
      setStudentList([...studentList])
      alert("this student Already Absent listed")
    }

  }

  const absentHandelar = (studentId)=>{
    const pStudent = studentList.find((item)=> item.id === studentId);
    if(pStudent.isPresent === undefined){
      setStudentList([...studentList])
      pStudent.isPresent = false
    } else if(pStudent.isPresent = false){
      setStudentList([...studentList])
      alert("this Student Already absent listed")

    }else{
      setStudentList([...studentList])
      alert("this student Already present listed")
    }
  }
 
 const toggleHandelar = (studentId)=>{
  setStudentList([...studentList])
  const pStudent = studentList.find((item)=> item.id === studentId);
  pStudent.isPresent = !pStudent.isPresent 
 }

  return (
    <div className="App">
      <form action="">
        <input onChange={(e)=>setStudent(e.target.value)} placeholder="Enter a student name" type="text" value = {student} />
        <button onClick={(e)=> isEditable ? updateHandaler(e,student) : getStudentList(e,student)}>
         {isEditable ? "Update Student":"Add Student"}</button>
        
      </form>

      <div class = "students">
        <div class = "All students">
          <ul>
            {studentList.map((names)=>
            
            <li>
              <span>{names.name}</span>
              <button onClick={()=> editHandaler(names.id)}>edit</button>
              <button onClick={()=> {
                // const newStudentlist = studentList.filter((items) => items.id !== names.id) ;
                // setStudentList(newStudentlist)
                deleteHandaler (names.id)

              }
              
              }>delete</button>
              <button onClick={()=> presentHandelar(names.id)} >present</button>
              <button  onClick={()=> absentHandelar(names.id)}>absent</button>
              
            </li>
            
            )}
            
          </ul>
          
        </div>
        <div class="presentstuent">
            <h2>present student</h2>
            <ul>
              {studentList.filter((item)=>item.isPresent === true).map((students)=>(
                <li>
                  <span>{students.name}</span>
                  <button onClick={()=>toggleHandelar(students.id)}> toggle</button>
                </li>
                
              ))}
            </ul>
          </div>
          <div class="presentstuent">
            <h2>present student</h2>
            <ul>
              {studentList.filter((item)=>item.isPresent === false).map((students)=>(
                <li>
                  <span>{students.name}</span>
                  <button onClick={()=>toggleHandelar(students.id)}> toggle</button>
                </li>
                
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
