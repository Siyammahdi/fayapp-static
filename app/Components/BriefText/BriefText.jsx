import React from 'react';

const BriefText = ({children}) => {
    return (
        <div className='text-sm w-2/5 text-center'>
            {children}
        </div>
    );
};

export default BriefText;