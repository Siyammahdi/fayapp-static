import React from 'react';

const HeadingText = ({children}) => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-white text-center w-[500px] mx-auto'>{children}</h1>
        </div>
    );
};

export default HeadingText;