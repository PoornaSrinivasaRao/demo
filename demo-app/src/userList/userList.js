import React from 'react'
import {Table} from "reactstrap"

let getDataFromLocalStorage = localStorage.getItem("list")
let dataFromLocalStorage = JSON.parse(getDataFromLocalStorage)

function userList(props) {
    return (
        <div>
            <Table bordered >
                <thead>
                    <tr>
                    <th>
                        #
                    </th>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Username
                    </th>
                    <th>
                       Entry
                    </th>
                    <th>
                       Action
                    </th>
                    </tr>
                </thead>
                {dataFromLocalStorage.map((user,index)=>
                <tbody>
                    <tr>
                    <th scope="row">
                        {index + 1}
                    </th>
                    <td>
                        {user.firstName}
                    </td>
                    <td>
                        {user.lastName}
                    </td>
                    <td>
                        {user.userName}
                    </td>
                    <td>
                        {user.entry}
                    </td>
                    <td>
                        <button className="btn btn-warning" type="button" >delete user</button>
                    </td>
                    </tr>
                    
                </tbody>)}
            </Table>
            <button className="btn btn-warning" onClick={()=>props.history.goBack()}>Go Back</button>
        </div>
    )
}

export default userList
