import React from 'react';
import { FaPhone } from 'react-icons/fa';

const Card = ({ user }) => {
    const { id, firstName, email, age, image, address, bloodGroup, phone, lastName, birthDate } = user
    return (
        <div className='border p-3 rounded-lg ' key={id}>
            <h2 className='text-xl font-medium mb-2'>
                {firstName} </h2>
            <div className='bg-gray-300 p-2 rounded-full'>
                <p>{address?.country}, {address?.city}</p>
            </div>
            <div className='flex items-center gap-3'>
                <img src={image} alt="user photo"
                    className='w-[100px] h-[100px] mt-2 rounded-full border border-green-500' />
                <div>
                    <p>{lastName}
                        <span className='ml-1'>{bloodGroup}</span>
                        </p>
                       <p>Age : {age}</p>
                </div>
            </div>
            <div className='mt-2'>
                <p>Birth Date : {birthDate}</p>
                <p className='flex items-center gap-2'><FaPhone /> : {age} {phone}</p>

            </div>
        </div>
    );
};

export default Card;