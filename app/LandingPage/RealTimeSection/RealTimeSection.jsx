import BriefText from '@/app/Components/BriefText/BriefText';
import HeadingText from '@/app/Components/HeadingText/HeadingText';
import Image from 'next/image';
import React from 'react';
import RealTime from '../../../public/Images/RealTime.jpg'
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';

const RealTimeSection = () => {

    const brief = "Access ad-free, uninterrupted data directly from trusted sources. With our zero-delay market updates, you'll always stay ahead of the curve."

    return (
        <div className='pb-20 lg:pb-0 lg:py-28'>
            <ComponentLayout>
                <div className='my-16'>
                    <HeadingText>Real-time data.</HeadingText>
                    <BriefText>{brief}</BriefText>
                </div>
                <div>
                    <Image src={RealTime} alt='realtime' />
                </div>
            </ComponentLayout>
        </div>
    );
};

export default RealTimeSection;