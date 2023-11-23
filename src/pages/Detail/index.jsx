import React from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from 'react';

const Detail = () => {
    let param = useParams()
    let [user, setUser] = useState({})

    useEffect(() => {
        handleGetUser()
    }, [])

    const handleGetUser = () => {
        axios
        .get(`https://api.mudoapi.tech/menu/${param.id}`)
        .then((res) => {
            console.log(res)
            setUser(res.data.data.data);
        })
        .catch((err) => console.log(err))
    }

    return ( 
        <div>   
            <div>
                <p>{user.name}</p>
                <p>{user.type}</p>
                <p>{user.price}</p>
                <p>{user.description}</p>
                {/* <h2>ini data id ke {param.id}</h2>   */}
            </div>
            <h1>ini Detail</h1>
            <button><Link to={`/User`}>Users</Link></button>
        </div>
    );
}

export default Detail;