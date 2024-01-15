
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';
import Link from 'next/link';
import React from 'react';


const Footer = () => {
    return (
        <div>
            <ComponentLayout>
                <div className='flex flex-col lg:flex-row items-center justify-between text-sm text-gray-600 py-10 font-semibold'>
                    <h6 className='lg:mb-0 mb-10'>© 2024, Fey Labs Inc.</h6>
                    <ul className='flex flex-col md:flex-row gap-8'>
                        <li><Link href="/">Pricing</Link></li>
                        <li><Link href="/">Updates</Link></li>
                        <li><Link href="/">Download</Link></li>
                        <li><Link href="/">Privacy Policy</Link></li>
                        <li><Link href="/">Terms of Use</Link></li>
                    </ul>
                </div>
            </ComponentLayout>
        </div>
    );
};

export default Footer;