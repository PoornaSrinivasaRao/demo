import React from 'react'
import {Card,CardImg,CardBody,CardTitle,CardSubtitle,CardText,Button }from "reactstrap"
import "../App.css"

function LoginNonAdmins(props) {
    const { userInfo} = props.location.state;
    // console.log(userInfo)
    const handleLogout = () =>{
        props.history.push("/")
    }
    return (
        <div>
            <div className="d-flex flex-row justify-content-end m-5">
            <button className="btn btn-success" onClick={handleLogout}>Logout</button>
            </div>
           <Card>
               <div className="img d-flex flex-row m-5">
                   <div>
                <CardImg alt=" image " src="https://picsum.photos/318/180" top /><br/>
                <button className="btn btn-primary m-2" >upload picture</button>
                <button className="btn btn-danger m-2">Remove picture</button>
                </div>
               <div className="m-2">
            <CardBody>
                    <CardTitle tag="h5">Name: {userInfo.firstName}  {userInfo.lastName} </CardTitle>
                    <CardSubtitle className="mb-2 " tag="h6">Type of employe:  {userInfo.entry}</CardSubtitle>
                    <CardText>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                    </CardText>
                    
            </CardBody>
            </div>
            </div>
            </Card>
        </div>
    )
}

export default LoginNonAdmins
