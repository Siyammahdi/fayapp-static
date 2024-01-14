
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';
import Link from 'next/link';
import React from 'react';


const Footer = () => {
    return (
        <div>
            <ComponentLayout>
                <div className='flex justify-between text-sm text-gray-600 pb-10 font-semibold'>
                    <h6>© 2024, Fey Labs Inc.</h6>
                    <ul className='flex gap-8'>
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