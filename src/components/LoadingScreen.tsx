import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { useThemeMode } from '../theme/ThemeContext';

export const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
    const { mode } = useThemeMode();

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
            onAnimationComplete={onComplete}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: mode === 'dark' ? '#0a192f' : '#f0f2f5',
                zIndex: 9999,
            }}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontWeight: 800,
                        background: mode === 'dark' ? 'linear-gradient(45deg, #00e676, #b2ff59)' : 'linear-gradient(45deg, #00c853, #1de9b6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textAlign: 'center',
                        mb: 2,
                        fontFamily: '"Outfit", sans-serif'
                    }}
                >
                    Welcome to my world
                </Typography>
            </motion.div>
            <Box sx={{ width: '200px', height: '4px', overflow: 'hidden', borderRadius: '4px', bgcolor: 'rgba(0,0,0,0.1)' }}>
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "linear"
                    }}
                    style={{
                        width: '100%',
                        height: '100%',
                        background: mode === 'dark' ? '#00e676' : '#00c853',
                    }}
                />
            </Box>
        </motion.div>
    );
};
