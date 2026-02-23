import React from 'react';
import { Box, Typography, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const skills = [
    'Communication', 'Teamwork', 'Adaptability', 'Problem Solving', 'Time management',
    'UI/UX Design', 'Software Engineering', 'Figma', 'React', 'TypeScript'
];

export const AboutSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Box component="section" id="about" sx={{ py: 10 }}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h2" mb={6} sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700, textAlign: 'center' }}>
                    About Me
                </Typography>

                <Grid container spacing={4}>
                    {/* Main About Text */}
                    <Grid item={true} xs={12} md={6}>
                        <Box className="glass-container" sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: theme.palette.text.secondary }}>
                                I am a UI/UX Designer with a background in Software Engineering. I focus on creating clean, user-friendly, and effective designs. I enjoy turning ideas into meaningful digital experiences and continuously improving my design skills.
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Languages */}
                    <Grid item={true} xs={12} md={6}>
                        <Box className="glass-container" sx={{ p: 4, height: '100%' }}>
                            <Typography variant="h5" mb={3} sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 600 }}>
                                Languages
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight={600}>English</Typography>
                                    <Typography variant="body2" color="text.secondary">Professional working proficiency</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight={600}>Tamil (Native)</Typography>
                                    <Typography variant="body2" color="text.secondary">Native or bilingual proficiency</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="subtitle1" fontWeight={600}>Sinhala</Typography>
                                    <Typography variant="body2" color="text.secondary">Beginner</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Education */}
                    <Grid item={true} xs={12} md={6}>
                        <Box className="glass-container" sx={{ p: 4, height: '100%' }}>
                            <Typography variant="h5" mb={3} sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 600, color: theme.palette.primary.main }}>
                                Education
                            </Typography>
                            <Box sx={{ position: 'relative', pl: 3, borderLeft: `2px solid ${theme.palette.divider}` }}>
                                {/* Timeline dot */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        left: -6,
                                        top: 0,
                                        width: 10,
                                        height: 10,
                                        borderRadius: '50%',
                                        bgcolor: theme.palette.primary.main
                                    }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                                    BEng(Hons) in Software Engineering
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 1 }}>
                                    London Metropolitan University
                                </Typography>
                                <Typography variant="body2" color="primary">
                                    2024 - 2025
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Skills */}
                    <Grid item={true} xs={12} md={6}>
                        <Box className="glass-container" sx={{ p: 4, height: '100%' }}>
                            <Typography variant="h5" mb={3} sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 600 }}>
                                Skills
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                                {skills.map((skill, index) => (
                                    <Chip
                                        key={index}
                                        label={skill}
                                        sx={{
                                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                                            border: theme.glass.border,
                                            color: theme.palette.text.primary,
                                            px: 1,
                                            py: 2,
                                            fontSize: '0.9rem',
                                            '&:hover': {
                                                bgcolor: 'rgba(0, 200, 83, 0.1)',
                                                color: theme.palette.primary.main,
                                                borderColor: theme.palette.primary.main
                                            },
                                            transition: 'all 0.3s'
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </motion.div>
        </Box>
    );
};
