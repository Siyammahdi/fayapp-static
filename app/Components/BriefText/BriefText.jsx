import clsx from 'clsx';
import React from 'react';

const BriefText = ({children, className}) => {
    return (
        <div className={clsx('text-xs lg:text-sm lg:w-2/5 mx-auto text-textColor text-center', className)}>
            {children}
        </div>
    );
};

export default BriefText;