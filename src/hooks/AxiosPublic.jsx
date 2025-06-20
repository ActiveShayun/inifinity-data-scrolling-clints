import axios from 'axios';
import React from 'react';

const instant = axios.create({
    baseURL: 'https://users-api-server-six.vercel.app',
    withCredentials: true
})

const AxiosPublic = () => {
    return instant
}

export default AxiosPublic;