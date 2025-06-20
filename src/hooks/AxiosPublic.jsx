import axios from 'axios';
import React from 'react';

const instant = axios.create({
    baseURL: 'https://infinitscroll-api-server.onrender.com',
    withCredentials: true
})

const AxiosPublic = () => {
    return instant
}

export default AxiosPublic;