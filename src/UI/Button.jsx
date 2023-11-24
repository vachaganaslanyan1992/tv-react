import React from 'react';

import {FaPlay} from 'react-icons/fa';

const Button = ({buttonType, props}) => {
    switch (buttonType) {
        case 'blue':
            return (
                <button
                    {...props}
                    className='w-36 bg-gradient-to-r text-white from-blue-600 to-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    type="button">
                    More Info
                </button>
            )
        default:
            return (
                <button
                    {...props}
                    className='w-36 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
                    type="button">
                    <FaPlay className="inline-block mr-2"/> Play
                </button>
            );
    }
};

export default Button;