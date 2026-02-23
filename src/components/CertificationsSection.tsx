import React from 'react';
import { Box, Typography, Card, CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';
import { FiAward, FiPlus } from 'react-icons/fi';
import { useTheme } from '@mui/material/styles';

const certifications = [
    { id: 1, title: 'Google UX Design Professional Certificate', issuer: 'Coursera', date: 'Upcoming', url: '#' },
    { id: 2, title: 'UI/UX Design Specialization', issuer: 'CalArts', date: 'Upcoming', url: '#' },
];

export const CertificationsSection: React.FC = () => {
    const theme = useTheme();

    return (
        <Box component="section" id="certifications" sx={{ py: 10 }}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h2" mb={2} sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700, textAlign: 'center' }}>
                    Licenses & Certifications
                </Typography>
                <Typography variant="body1" mb={6} color="text.secondary" sx={{ textAlign: 'center', maxWidth: 600, mx: 'auto' }}>
                    Continuous learning is key to staying ahead in design and technology. Here are my current and upcoming certifications.
                </Typography>

                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 4 }}>
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Card
                                className="glass-container"
                                sx={{
                                    bgcolor: 'transparent',
                                    backgroundImage: 'none',
                                    boxShadow: 'none',
                                    borderRadius: 4,
                                    height: '100%',
                                    border: theme.glass.border
                                }}
                            >
                                <CardActionArea sx={{ p: 3, height: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', gap: 3 }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: 3,
                                            bgcolor: `${theme.palette.primary.main}15`,
                                            color: theme.palette.primary.main,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <FiAward size={32} />
                                    </Box>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: '"Outfit", sans-serif', mb: 0.5 }}>
                                            {cert.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                            {cert.issuer}
                                        </Typography>
                                        <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 500, bgcolor: `${theme.palette.primary.main}15`, px: 1.5, py: 0.5, borderRadius: 1 }}>
                                            {cert.date}
                                        </Typography>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </motion.div>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: certifications.length * 0.1 }}
                    >
                        <Card
                            className="glass-container"
                            sx={{
                                bgcolor: 'transparent',
                                backgroundImage: 'none',
                                boxShadow: 'none',
                                borderRadius: 4,
                                height: '100%',
                                minHeight: 140,
                                border: `2px dashed ${theme.palette.divider}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0.7,
                                '&:hover': { opacity: 1, borderColor: theme.palette.primary.main }
                            }}
                        >
                            <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
                                <FiPlus size={24} color={theme.palette.text.secondary} />
                                <Typography variant="body2" color="text.secondary">More to come...</Typography>
                            </CardActionArea>
                        </Card>
                    </motion.div>
                </Box>
            </motion.div>
        </Box>
    );
};
