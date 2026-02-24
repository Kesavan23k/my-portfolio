import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea, CardMedia } from '@mui/material';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

const projects = [
    { id: 1, title: 'Hiker Mobile App Design', category: 'Mobile UI', image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop' },
    { id: 2, title: 'Medislot Doctor Appointment', category: 'App Design', image: 'https://images.unsplash.com/photo-1576091160355-24dbce57ca62?w=600&h=400&fit=crop' },
    { id: 3, title: 'GreenLeaf Cleaning Services', category: 'Web & Mobile', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop' },
    { id: 4, title: 'EMC Bank', category: 'Web & Mobile', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop' },
    { id: 5, title: 'EMC Hostel Management', category: 'System Design', image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop' },
    { id: 6, title: 'Woogency', category: 'Web Design', image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop' }
];

export const ExperienceProjectsSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: 10, display: 'flex', flexDirection: 'column', gap: 10 }}>

            {/* Experience Section */}
            <Box component="section" id="experience">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h2" mb={6} sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700, textAlign: 'center' }}>
                        Experience
                    </Typography>

                    <Box className="glass-container" sx={{ p: 4, maxWidth: '800px', mx: 'auto', position: 'relative' }}>
                        <Box sx={{ position: 'relative', pl: 3, borderLeft: `2px solid ${theme.palette.primary.main}` }}>
                            {/* Timeline dot */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    left: -7,
                                    top: 0,
                                    width: 12,
                                    height: 12,
                                    borderRadius: '50%',
                                    bgcolor: theme.palette.background.paper,
                                    border: `2px solid ${theme.palette.primary.main}`
                                }}
                            />
                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 1, color: theme.palette.text.primary }}>
                                UI/UX & Graphic Designer
                            </Typography>
                            <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main, fontWeight: 500, mb: 1 }}>
                                Marazin Academy
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                Dec 2025 - Present • Kalmunai, Eastern Province, Sri Lanka (Hybrid)
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                Leading UI/UX design initiatives, creating intuitive digital experiences, and producing high-quality graphic assets for various projects and campaigns.
                            </Typography>
                        </Box>
                    </Box>
                </motion.div>
            </Box>

            {/* Projects Section */}
            <Box component="section" id="projects">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Typography variant="h2" mb={6} sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700, textAlign: 'center' }}>
                        Featured Projects
                    </Typography>

                    <Grid container spacing={4}>
                        {projects.map((project, index) => (
                            <Grid item={true} xs={12} sm={6} md={4} key={project.id}>
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -10 }}
                                >
                                    <Card
                                        sx={{
                                            bgcolor: 'transparent',
                                            backgroundImage: 'none',
                                            boxShadow: 'none',
                                            borderRadius: 4,
                                            overflow: 'hidden',
                                            height: '100%',
                                        }}
                                    >
                                        <CardActionArea className="glass-container" sx={{ height: '100%', p: 0, border: theme.glass.border }}>
                                            {project.image ? (
                                                <CardMedia
                                                    component="img"
                                                    height="200"
                                                    image={project.image}
                                                    alt={project.title}
                                                    sx={{ filter: 'brightness(0.8)', transition: '0.3s', '&:hover': { filter: 'brightness(1)' } }}
                                                />
                                            ) : (
                                                <Box
                                                    sx={{
                                                        height: 200,
                                                        width: '100%',
                                                        background: `linear-gradient(45deg, ${theme.palette.background.paper} 0%, ${theme.palette.primary.main}15 100%)`,
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        borderBottom: theme.glass.border
                                                    }}
                                                >
                                                    <Typography variant="h1" sx={{ opacity: 0.1, fontWeight: 900 }}>
                                                        {project.id.toString().padStart(2, '0')}
                                                    </Typography>
                                                </Box>
                                            )}
                                            <CardContent sx={{ p: 3 }}>
                                                <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                                                    {project.category}
                                                </Typography>
                                                <Typography variant="h6" sx={{ mt: 1, fontWeight: 600, fontFamily: '"Outfit", sans-serif' }}>
                                                    {project.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </motion.div>
            </Box>

        </Box>
    );
};
