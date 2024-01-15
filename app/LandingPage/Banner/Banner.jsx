import HeadingText from '@/app/Components/HeadingText/HeadingText';
import Image from 'next/image';
import React from 'react';
import Macbook from '../../../public/Images/macbook.png'
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';
import BriefText from '@/app/Components/BriefText/BriefText';
import Graph from '../../../public/Images/graph.png'
import Partners from '@/app/Components/Partners/Partners';

const Banner = () => {
    return (
        <div className=''>
            <ComponentLayout>
                <div>
                    <h6 className='uppercase font-bold text-xs lg:text-sm text-center bg-gradient-to-r from-gred1 to-gred2 opacity-70 text-transparent bg-clip-text'>Now available to everyone</h6>
                    <HeadingText className="">The Definitive Research tool for the modern investors.</HeadingText>
                    <p className='text-xs font-bold text-textColor text-center'>Press <span className='bg-gray-800 px-[4px] py-[1px] rounded-sm'>T</span> anytime to start your trail</p>
                </div>
                <div className='my-20 flex justify-center'>
                    <Image src={Macbook} width={800} alt='macbook' />
                </div>
                <div>
                    <HeadingText>See the big picture.</HeadingText>
                    <BriefText>Monitor and analyze real-time market data. Fey always keeps you informed, enabling you to make better investment decisions.</BriefText>
                </div>
                <div className='my-20 flex justify-center'>
                    <Image src={Graph} width={800} alt='graph' />
                </div>
                <div className='mb-20'>
                    <HeadingText>Immerse yourself.</HeadingText>
                    <BriefText>Dive into financials, estimates, and more. All meticulously sourced from the titans of the industry, packed within a beautiful interface.</BriefText>
                    <Partners />
                </div>
            </ComponentLayout>
        </div>
    );
};

export default Banner;