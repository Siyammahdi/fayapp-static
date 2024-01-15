import React from 'react';
import Banner from './Banner/Banner';
import CommandSection from './CommandSection/CommandSection';
import EverythingSection from './EverythingSection/EverythingSection';
import ExpandSection from './ExpandSection/ExpandSection';
import RealTimeSection from './RealTimeSection/RealTimeSection';
import ResearchSection from './ResearchSection/ResearchSection';

const LandingPage = () => {
    return (
        <div>
            <Banner />
            <CommandSection />
            <div className='bg-black'>
                <EverythingSection />
                <ExpandSection />
                <RealTimeSection />
            </div>
            <ResearchSection />
        </div>
    );
};

export default LandingPage;