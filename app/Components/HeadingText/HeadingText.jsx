import clsx from 'clsx';
import React from 'react';

const HeadingText = ({ children, className }) => {
    return (
        <div>
            <h1 className={clsx('text-2xl md:text-4xl font-bold text-white text-center lg:w-[600px] mx-auto py-7', className)}>{children}</h1>
        </div>
    );
};

export default HeadingText;