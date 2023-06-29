import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Axios() {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users") 
        .then((response)=>{
            console.log(response,'kfbhjvdfkgvydf');
            setData(response.data);
        })
    },[])
  return (
    <div>
        <h2 style={{color:'green', textAlign:'center'}}>Users Data</h2>
        <table>
            <thead style={{color:'red'}}>
                <tr>
                     
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone no</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody style={{color:'orange'}}>
            {
            data.map((user,id)=>{
                 
                return <tr key={id}>
                     
                    <td style={{color:'blue'}}>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>
            })
        }
            </tbody>
        </table>
    </div>
  )
}
