import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import "../App.css"
console.log(uuidv4())
function RegitserPage() {
    const [inputs,setinputs] = useState({
        id:"",
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
                id:uuidv4(),
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
    let dataFromLocalStorage = localStorage.getItem("list")
    let parsingData = JSON.parse(dataFromLocalStorage)
        // console.log(parsingData)
        let isAdmin = false  
        if (parsingData === null){
            isAdmin = false
        }else{
            for (let j of parsingData){
                if (j.entry === "admin"){
                    isAdmin = true
                }
            }
        }
    return (
        <div className="bg">
            <div className="d-flex flex-row justify-content-center">
            <div className="card">
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
              <Link to="/" className="link link-primary">Cancel</Link>
           </form>
        </div>
        </div>
        </div>
    )
}

export default RegitserPage
