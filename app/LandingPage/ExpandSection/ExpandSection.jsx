import BriefText from '@/app/Components/BriefText/BriefText';
import HeadingText from '@/app/Components/HeadingText/HeadingText';
import Image from 'next/image';
import React from 'react';
import Monitor from '../../../public/Images/monitor.png'
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';
import Screen from '../../../public/Images/screen.png'
import { HiArrowUturnUp } from "react-icons/hi2";

const ExpandSection = () => {

    const heading = "Expand What's possible"

    return (
        <div className='lg:py-20'>
            <ComponentLayout>
                <div>
                    <HeadingText>{heading}</HeadingText>
                    <BriefText>Our Screener lets you quickly shift through thousands of stock data points in seconds, all without the need for a single mouse click.</BriefText>
                </div>
                <div className='py-16 lg:py-28'>
                    <Image src={Monitor} alt='monitor' />
                    <div className='-mt-[235px] md:-mt-[523px] lg:-mt-[810px] lg:ml-3 '>
                        <Image src={Screen} alt='screen' />
                    </div>
                    <div className='flex justify-end'>
                        <button className='btn btn-xs rounded-full bg-zinc-950 hover:bg-zinc-900 border text-white font-bold text-xs px-4 my-7 mx-3'> <HiArrowUturnUp className='rotate-90 text-xs' /> Replay</button>
                    </div>
                </div>
            </ComponentLayout>
        </div>
    );
};

export default ExpandSection;