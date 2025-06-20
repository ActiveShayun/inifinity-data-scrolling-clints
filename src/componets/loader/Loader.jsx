import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
    return (
        <div>
            <div className='flex items-center justify-center gap-3 mx-auto text-2xl font-medium text-center text-green-500 mt-4'>
                Data is loading...
                <AiOutlineLoading3Quarters
                    className='animate-spin'/>
            </div>
        </div>
    );
};

export default Loader;