import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "../App.css"
let dataFromLocalStorage = localStorage.getItem("list")
let parsingData = JSON.parse(dataFromLocalStorage)
// console.log(y)
function HomePage(props) {
    const [user,setUser] = useState({
        userName:"",
        password:"",
        entry:""
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({})
    }
    const handleChange = (e) =>{
        setUser(user => ({ ...user, [e.target.name]: e.target.value }));
    }
    const fieldValidation = (e) =>{
        if(e.target.value === ""){
            e.target.placeholder =  "*Required"
        }
    }
    const checkingFields= (e) =>{
        if(user.userName === ""  || user.password === "" ){
            alert("please enter the required details")
        }
    let isLogin = false
    if (parsingData === null){
        isLogin = false
        // alert(isLogin,y)
        
    }else {
        for (let i of parsingData){
            if ((i.userName === user.userName) && (i.password === user.password) && (i.entry === "admin")){
                isLogin = true
                props.history.push("/loginAdmins",{userInfo:i})
            }else if ((i.userName === user.userName) && (i.password === user.password)&&(i.entry !== "admin")){
                isLogin = true
                props.history.push("/loginNonAdmins",{userInfo:i})
    
            }
        }
    }

   
}
    
    return (
        <div className="bg m-2">
          <div className="d-flex flex-row justify-content-center">
            <div className="card">
            <h1 className="head"> Login </h1>
           <form onSubmit={handleSubmit}>
              <label className="text-field">User Name</label> <br/>
              <input className="text-input" type="text" name="userName" value={user.userName} onChange={handleChange} onBlur={fieldValidation}/> <br/>
              <label className="text-field">Password</label> <br/>
              <input className="text-input" type="password" name="password" value={user.password } onChange={handleChange} onBlur={fieldValidation}/> <br/>
              <button className="btn btn-primary m-4" type="submit" onClick={checkingFields}> Login </button>
              <Link to="/register" className="link link-primary"> Register</Link>
           </form>
           </div>
           </div>
           </div>
           
    )
}

export default HomePage