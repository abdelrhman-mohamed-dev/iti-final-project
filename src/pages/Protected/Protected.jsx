import React from 'react'
import Login from '../Login/Login';
import { Navigate } from 'react-router-dom';

export default function Protected(props) {
  
    let token = localStorage.getItem('token');

    if(token)
        return props.children;
    else
        return <Navigate to={'/login'} />

}
