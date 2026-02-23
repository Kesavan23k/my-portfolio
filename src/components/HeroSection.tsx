import React from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useTheme } from '@mui/material/styles';
import profilePic from '../images/WhatsApp Image 2026-01-14 at 16.03.25.......jpeg';

export const HeroSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Box
            component="section"
            id="hero"
            sx={{
                minHeight: { xs: 'calc(100vh - 80px)', md: '100vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
            }}
        >
            {/* Decorative background blur elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '10%',
                    width: '30vw',
                    height: '30vw',
                    borderRadius: '50%',
                    bgcolor: theme.palette.primary.main,
                    filter: 'blur(100px)',
                    opacity: 0.15,
                    zIndex: -1,
                }}
            />

            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ width: '100%' }}
            >
                <Box
                    className="glass-container"
                    sx={{
                        p: { xs: 4, md: 8 },
                        textAlign: 'center',
                        maxWidth: '800px',
                        mx: 'auto'
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <Box
                            component="img"
                            src={profilePic}
                            alt="Kokulan Kethusan"
                            sx={{
                                width: 150,
                                height: 150,
                                borderRadius: '50%',
                                objectFit: 'cover',
                                mb: 3,
                                border: `4px solid ${theme.palette.primary.main}`,
                                boxShadow: `0 8px 32px ${theme.palette.primary.main}40`,
                                backgroundColor: theme.palette.background.paper
                            }}
                        />
                        <Typography
                            variant="h6"
                            color="primary"
                            sx={{ fontWeight: 600, letterSpacing: 2, mb: 2, textTransform: 'uppercase' }}
                        >
                            Hello, I'm
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: { xs: '3rem', md: '5rem' },
                                fontWeight: 800,
                                mb: 2,
                                fontFamily: '"Outfit", sans-serif',
                                color: theme.palette.text.primary,
                                textRendering: 'optimizeLegibility'
                            }}
                        >
                            Kokulan Kethusan
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontWeight: 400,
                                mb: 4,
                                fontFamily: '"Outfit", sans-serif'
                            }}
                        >
                            UI/UX Designer & Software Engineer
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<FiDownload />}
                                sx={{
                                    py: 1.5,
                                    px: 4,
                                    borderRadius: '30px',
                                    boxShadow: `0 8px 16px ${theme.palette.primary.main}40`,
                                    '&:hover': {
                                        transform: 'translateY(-2px)',
                                        boxShadow: `0 12px 20px ${theme.palette.primary.main}60`,
                                    },
                                    transition: 'all 0.3s'
                                }}
                            >
                                Download CV
                            </Button>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                            {[
                                { icon: <FiLinkedin />, link: 'https://www.linkedin.com/in/kethusan-kokulan-9a2190268' },
                                { icon: <FiMail />, link: 'mailto:kethusan4@gmail.com' },
                                { icon: <FiGithub />, link: '#' }
                            ].map((social, index) => (
                                <IconButton
                                    key={index}
                                    component="a"
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        bgcolor: theme.palette.background.paper,
                                        border: theme.glass.border,
                                        color: theme.palette.text.primary,
                                        '&:hover': {
                                            color: theme.palette.primary.main,
                                            transform: 'translateY(-3px)'
                                        },
                                        transition: 'all 0.2s',
                                        width: 50,
                                        height: 50
                                    }}
                                >
                                    {social.icon}
                                </IconButton>
                            ))}
                        </Box>
                    </motion.div>
                </Box>
            </motion.div>
        </Box>
    );
};
