import React from 'react';

const ComponentLayout = ({children}) => {
    return (
        <div className='max-w-6xl mx-5 lg:mx-auto'>
            {children}
        </div>
    );
};

export default ComponentLayout;