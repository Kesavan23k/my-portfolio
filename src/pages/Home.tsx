import React, { useState } from 'react';
import { Box } from '@mui/material';
import { LoadingScreen } from '../components/LoadingScreen';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ExperienceProjectsSection } from '../components/ExperienceProjectsSection';
import { CertificationsSection } from '../components/CertificationsSection';
import { ContactSection } from '../components/ContactSection';

const HomePage: React.FC = () => {
    const [loading, setLoading] = useState(true);

    if (loading) {
        return <LoadingScreen onComplete={() => setLoading(false)} />;
    }

    return (
        <Layout>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <HeroSection />
                <AboutSection />
                <ExperienceProjectsSection />
                <CertificationsSection />
                <ContactSection />
            </Box>
        </Layout>
    );
};

export default HomePage;
