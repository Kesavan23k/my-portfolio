import React from 'react';
import { Box, IconButton, useMediaQuery, AppBar, Toolbar, Typography, Tooltip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useThemeMode } from '../theme/ThemeContext';
import { FiMoon, FiSun, FiUser, FiCode, FiBriefcase, FiAward, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface LayoutProps {
    children: React.ReactNode;
}

const navItems = [
    { id: 'about', icon: <FiUser />, label: 'About' },
    { id: 'experience', icon: <FiBriefcase />, label: 'Experience' },
    { id: 'projects', icon: <FiCode />, label: 'Projects' },
    { id: 'certifications', icon: <FiAward />, label: 'Certifications' },
];

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    const theme = useTheme();
    const { mode, toggleTheme } = useThemeMode();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Desktop Sidebar (WhatsApp Web style) */}
            {!isMobile && (
                <Box
                    component={motion.div}
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    sx={{
                        width: 80,
                        flexShrink: 0,
                        borderRight: theme.glass.border,
                        bgcolor: theme.glass.background,
                        backdropFilter: theme.glass.backdropFilter,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        py: 4,
                        zIndex: 1200,
                        position: 'relative'
                    }}
                >
                    {/* Theme Toggle */}
                    <Tooltip title="Toggle Theme" placement="right">
                        <IconButton onClick={toggleTheme} sx={{ mb: 4, color: theme.palette.text.primary }}>
                            {mode === 'dark' ? <FiSun /> : <FiMoon />}
                        </IconButton>
                    </Tooltip>

                    {/* Navigation Links */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, flexGrow: 1, justifyContent: 'center' }}>
                        {navItems.map((item) => (
                            <Tooltip key={item.id} title={item.label} placement="right">
                                <IconButton
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        '&:hover': { color: theme.palette.primary.main, transform: 'scale(1.1)' },
                                        transition: 'all 0.2s'
                                    }}
                                >
                                    {item.icon}
                                </IconButton>
                            </Tooltip>
                        ))}
                    </Box>

                    {/* Contact Button */}
                    <Tooltip title="Contact me" placement="right">
                        <IconButton
                            color="primary"
                            onClick={() => scrollToSection('contact')}
                            sx={{
                                mt: 4,
                                bgcolor: 'rgba(0, 200, 83, 0.1)',
                                '&:hover': { bgcolor: 'rgba(0, 200, 83, 0.2)' }
                            }}
                        >
                            <FiMessageSquare />
                        </IconButton>
                    </Tooltip>
                </Box>
            )}

            {/* Main Chat/Content Area */}
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    height: '100vh',
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    scrollBehavior: 'smooth',
                    position: 'relative',
                }}
            >
                {/* Mobile App Bar */}
                {isMobile && (
                    <AppBar
                        position="sticky"
                        elevation={0}
                        sx={{
                            bgcolor: theme.glass.background,
                            backdropFilter: theme.glass.backdropFilter,
                            borderBottom: theme.glass.border,
                        }}
                    >
                        <Toolbar sx={{ justifyContent: 'space-between' }}>
                            <Typography variant="h6" color="text.primary" fontWeight="bold" sx={{ fontFamily: 'Outfit' }}>
                                Kokulan Portfolio
                            </Typography>
                            <IconButton onClick={toggleTheme} sx={{ color: theme.palette.text.primary }}>
                                {mode === 'dark' ? <FiSun /> : <FiMoon />}
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                )}

                {/* The actual page content */}
                <Box sx={{ maxWidth: '1200px', mx: 'auto', p: { xs: 2, md: 4 }, pb: { xs: 10, md: 4 } }}>
                    {children}
                </Box>
            </Box>

            {/* Mobile Bottom Navigation (WhatsApp standard style) */}
            {isMobile && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        bgcolor: theme.glass.background,
                        backdropFilter: theme.glass.backdropFilter,
                        borderTop: theme.glass.border,
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        p: 1.5,
                        zIndex: 1200,
                        paddingBottom: 'calc(1.5rem + env(safe-area-inset-bottom))'
                    }}
                >
                    {navItems.map((item) => (
                        <IconButton
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            size="small"
                            sx={{ color: theme.palette.text.secondary }}
                        >
                            {item.icon}
                        </IconButton>
                    ))}
                    <IconButton
                        color="primary"
                        size="small"
                        onClick={() => scrollToSection('contact')}
                        sx={{ bgcolor: 'rgba(0, 200, 83, 0.1)' }}
                    >
                        <FiMessageSquare />
                    </IconButton>
                </Box>
            )}
        </Box>
    );
};
