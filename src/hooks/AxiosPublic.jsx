import axios from 'axios';
import React from 'react';

const instant = axios.create({
    baseURL: 'http://localhost:5000',
})

const AxiosPublic = () => {
    return instant
}

export default AxiosPublic;