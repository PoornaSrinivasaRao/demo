import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import "../App.css"

function RegitserPage() {
    const [inputs,setinputs] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        password:"",
        entry:"",
        
    })
    const [userList,setUserList] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(inputs.firstName === "" || inputs.lastName === "" || inputs.userName === ""  || inputs.password === "" || inputs.entry === ""){
            alert("please enter the required details")
        }else{
            setUserList((prev)=>[...prev,inputs])
            setinputs({
                firstName:"",
                lastName:"",
                userName:"",
                password:"",
                entry:"",
            })
            alert("Registration is succesfull")
        }
    }
    const handleChange = (e) =>{
        setinputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
        console.log(e.target.value)

    }
    
    
    
    useEffect(()=>{
        if ((userList.length > 0 )){
            localStorage.setItem("list", JSON.stringify(userList));
        }
        
        
    },[userList])
    
    const fieldValidation = (e) =>{
        if(e.target.value === ""){
            e.target.placeholder =  "*Required"
        }
    }
    const checkingFields= (e) =>{
        if(inputs.firstName === "" || inputs.lastName === "" || inputs.userName === ""  || inputs.password === "" || inputs.entry === ""){
            alert("please enter the required details")
        }else{
             alert("Registration is succesfull")
        }
    }
        let x = localStorage.getItem("list")
        let y = JSON.parse(x)
        console.log(y)
        let isAdmin = false  
        if (y === null){
            isAdmin = false
            
        }else{
            for (let j of y){
                if (j.entry === "admin"){
                    isAdmin = true
                }
            }
        }
    return (
        <div className="bg">
            <h1 className="head"> Register Here</h1>
           <form onSubmit={handleSubmit}>
              <label className="text-field">First Name</label> <br/>
              <input className="text-input" type="text" name="firstName" value={inputs.firstName ? inputs.firstName : "" } onChange={handleChange} onBlur={fieldValidation} /> <br/>
              <label className="text-field">Last Name</label> <br/>
              <input className="text-input" type="text" name="lastName" value={inputs.lastName ? inputs.lastName : ""} onChange={handleChange} onBlur={fieldValidation}/> <br/>
              <label className="text-field">User Name</label> <br/>
              <input className="text-input" type="text" name="userName" value={inputs.userName ? inputs.userName : ""} onChange={handleChange} onBlur={fieldValidation}/> <br/>
              <label className="text-field">Password</label> <br/>
              <input className="text-input" type="password" name="password" value={inputs.password ? inputs.password : ""} onChange={handleChange} onBlur={fieldValidation}/> <br/>
{isAdmin?  <div>   <label className="text-field">type of entery</label> <br/>
              <select className="text-input" name="entry" value = {inputs.entry ? inputs.entry: ""}  onChange={handleChange} onBlur={fieldValidation} >
                   <option  value = "select"  >select</option>
                   <option value="employe" selected>Employe</option>
                   <option value="manager" selected>Manager</option>
               </select></div> :
                <div>   <label className="text-field">type of entery</label> <br/>
                <select className="text-input" name="entry" value = {inputs.entry ? inputs.entry: ""}  onChange={handleChange} onBlur={fieldValidation} >
                     <option  value = "select"  >select</option>
                      <option  value = "admin"  >Admin</option>
                      <option value="manager" selected>Manager</option>
                      <option value="employe" selected>Employe</option>
                 </select></div> }
              <button className="btn btn-primary m-4" type="submit" > Register </button>
              <Link to="/" className="link link-warning">Cancel</Link>
           </form>
        </div>
    )
}

export default RegitserPage
