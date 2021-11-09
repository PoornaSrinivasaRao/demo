import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "../App.css"
let x = localStorage.getItem("list")
let y = JSON.parse(x)
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
    if (y === null){
        isLogin = false
        alert(isLogin,y)
        
    }else {
        for (let i of y){
            if ((i.userName === user.userName) && (i.password === user.password) && (i.entry === "admin")){
                isLogin = true
                props.history.push("/loginAdmins")
            }else if ((i.userName === user.userName) && (i.password === user.password)&&(i.entry !== "admin")){
                isLogin = true
                props.history.push("/loginNonAdmins")
    
            }
        }
    }

   
}
    
    return (
        <div className="bg m-2">
            <h1 className="head"> Login </h1>
           <form onSubmit={handleSubmit}>
              <label className="text-field">User Name</label> <br/>
              <input className="text-input" type="text" name="userName" value={user.userName} onChange={handleChange} onBlur={fieldValidation}/> <br/>
              <label className="text-field">Password</label> <br/>
              <input className="text-input" type="password" name="password" value={user.password } onChange={handleChange} onBlur={fieldValidation}/> <br/>
              <button className="btn btn-primary m-4" type="submit" onClick={checkingFields}> Login </button>
              <Link to="/register" className="link link-warning"> Register</Link>
           </form>
        </div>
    )
}

export default HomePage