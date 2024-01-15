"use client"
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';
import Image from 'next/image';
import React, { useState } from 'react';
import laptopClosed from '../../../public/Images/laptopClosed.png'
import logoHovered from '../../../public/Images/logoHovered.png'
import logoUnhovered from '../../../public/Images/logoUnhovered.png'

const ResearchSection = () => {

    const [hovered, setHovered] = useState(false)

    return (
        <div className=''>
            <ComponentLayout>
                <div className='pt-20 lg:pt-0 pb-28'>
                    <div className='-mb-[400px] ml-16 hidden lg:block' style={{ backgroundImage: 'radial-gradient(circle, rgb(42, 43, 48) 1px, rgb(42, 43, 48) 1px, transparent 1px, transparent 100%)', backgroundRepeat: 'repeat', width: '1000px', height: '700px', maskImage: 'radial-gradient(rgb(0, 0, 0), transparent 50%)', backgroundSize: '8px 8px', zIndex: 1 }}>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-gred1 to-gred2 text-transparent bg-clip-text text-center w-full mx-auto mb-8 relative z-10">A whole new <br /> take on research.</h2>
                    <div className='flex justify-center'>
                        <button onMouseOut={() => setHovered(false)} onMouseEnter={() => setHovered(true)} className='btn btn-sm lg:btn-outline z-10 bg-white bg-opacity-5 rounded-full lg:px-16 py-0 hover:bg-white text-white border-white font-bold shadow-lg shadow-gray-800'>Try it free</button>

                    </div>
                </div>
                <div>
                    <Image src={laptopClosed} height={4000} width={1200} alt='laptop' />
                    <div className='hidden lg:block'>
                        {
                            hovered ? <Image className='-mt-[300px]' src={logoHovered} height={4000} width={1200} alt='hovered' />
                                :
                                <Image className=' -mt-[300px] ' src={logoUnhovered} height={4000} width={1200} alt='hovered' />
                        }
                    </div>
                </div>

            </ComponentLayout>
        </div>
    );
};

export default ResearchSection;