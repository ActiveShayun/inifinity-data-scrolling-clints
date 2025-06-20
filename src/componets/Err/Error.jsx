import React from 'react';
import { GiConqueror } from 'react-icons/gi';

const Error = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-3 mx-auto text-2xl font-medium text-center text-red-500'>
                Data loading failed <GiConqueror />
            </div>
        </div>
    );
};

export default Error;