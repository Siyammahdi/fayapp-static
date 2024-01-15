import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';
import BriefText from '@/app/Components/BriefText/BriefText';
import Image from 'next/image';
import React from 'react';
import Keyboard from '../../../public/Images/keyboard.png';
import Search from '../../../public/Images/search.png'

const CommandSection = () => {
    return (
        <div className='bg-CommandBg h-screen py-20'>
            <ComponentLayout>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gred1 to-gred2 text-transparent bg-clip-text">Always at your command.</h2>
                    <BriefText className="font-bold text-start lg:mt-0 mt-5 mx-0">The Fey Command lets you have full control at your fingertips. Manage your portfolio, view transactions and execute real-time orders in seconds, all without ever touching your mouse.</BriefText>
                </div>
                <div className='py-16 lg:py-28'>
                    <Image src={Keyboard} alt='keyboard' />
                    <div className='hidden lg:block lg:ml-[690px] -mt-[285px]'>
                        <Image src={Search} alt='search' />
                    </div>
                </div>
            </ComponentLayout>
        </div>
    );
};

export default CommandSection;