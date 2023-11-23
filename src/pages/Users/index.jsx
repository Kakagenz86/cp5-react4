import React from 'react'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [isSubmit, setSubmit] = useState(false)

    useEffect(() => {
        handleGetUser(name, type);
    }, []);

    const handleGetUser = (dataName, dataType) => {
        axios
            .get(`https://api.mudoapi.tech/menus?name=${dataName}&type=${dataType}`)
            .then((res) => {
                console.log(res)
                setUsers(res.data.data.Data);
            })
            .catch((err) => console.log(err));
    };

    const handleDropdown = (e) => {
        setType(e.target.value);
    };

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        handleGetUser(name, type);
        setSubmit(true)
    };

    const handleReset = () => {
        setName('')
        setType('')
        handleGetUser("", "")
        setSubmit(false)
    }

    const handleChangeSubmit = () => {
        if(isSubmit == false) {
            setSubmit(true)
            handleSubmit()
        } else if (isSubmit == true) {
            setSubmit(false)
            handleReset()
        }
    }

    return (
        <div>
            <input onChange={handleChangeName} placeholder='search' value={name} />
            <select onChange={handleDropdown} value={type}>
                <option value={''}>type</option>
                <option value={'main-dish'}>makanan</option>
                <option value={'beverage'}>minuman</option>
            </select>
            {isSubmit ? <button onClick={handleChangeSubmit}>Reset</button> : <button onClick={handleChangeSubmit}>Submit</button>}


            {users.length ? (
                users.map((user) => (
                    <div key={user.id}>
                        <h1>{user.name}</h1>
                        {/* <img src={user.imageUrl} alt="" /> */}
                        <button><Link to={`/detail/${user.id}`}>Detail</Link></button>
                    </div>
                ))
                ) : (
                    <h1>Tidak ada cuyyy!!!</h1>
                    )}
                    <button><Link to={`/`}>Home</Link></button>
        </div>
    );
};

export default Users;
