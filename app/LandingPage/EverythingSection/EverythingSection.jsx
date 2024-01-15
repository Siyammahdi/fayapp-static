import BriefText from '@/app/Components/BriefText/BriefText';
import HeadingText from '@/app/Components/HeadingText/HeadingText';
import Image from 'next/image';
import React from 'react';
import Img1 from '../../../public/Images/1st.png'
import Img2 from '../../../public/Images/2nd.png'
import Img3 from '../../../public/Images/3rd.png'
import Img4 from '../../../public/Images/4th.png'
import Img5 from '../../../public/Images/5th.png'
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';

const EverythingSection = () => {

    const briefText = "Whether you're an armchair investor or a Wall Street Aficionado, Fay is designed to keep you informed with real time market data and advanced analysis tools."

    return (
        <div className='pt-28'>

            <div className='mx-10'>
                <div>
                    <HeadingText>Everything, unlike anything.</HeadingText>
                    <BriefText>{briefText}</BriefText>
                </div>
                <div className='py-20'>
                    <div className='py-10'>
                        <BriefText className="font-bold text-start mx-0 py-10 text-xs lg:text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, accusamus! Dolorum reiciendis eius fugit repellendus vel dolores consequatur. Aspernatur, incidunt.</BriefText>
                        <Image src={Img1} alt='1' />
                    </div>
                    <div className='flex flex-col lg:flex-row justify-between items-center'>
                        <BriefText className="font-bold text-start mx-5 py-10 text-xs lg:text-base ">
                            Research is all about quality of data and accuracy. Unlike most financial apps, our asset pages are carefully curated to remove the noise, while still giving you access to rich market intelligence from a single keypress. <button className=' btn-link px-0'>Learn more</button></BriefText>
                        <div className='space-y-6'>
                            <Image src={Img2} alt='2' />
                            <Image src={Img3} alt='2' />
                            <span className='text-sm lg:text-lg text-textColor'>Events</span>
                            <Image src={Img4} alt='2' />
                            <Image src={Img5} alt='2' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default EverythingSection;