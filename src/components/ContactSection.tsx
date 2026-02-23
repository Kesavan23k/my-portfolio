import React from 'react';
import { Box, Typography, Button, TextField, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { FiMessageCircle, FiMapPin, FiMail, FiPhone } from 'react-icons/fi';
import { useTheme } from '@mui/material/styles';

export const ContactSection: React.FC = () => {
    const theme = useTheme();

    const handleWhatsAppRedirect = () => {
        // Replace with correct number
        const phoneNumber = '+94752386622';
        const message = encodeURIComponent("Hello Kokulan! I'm interested in working with you.");
        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
    };

    return (
        <Box component="section" id="contact" sx={{ py: 10, pb: { xs: 20, md: 10 } }}>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <Typography variant="h2" mb={6} sx={{ fontFamily: '"Outfit", sans-serif', fontWeight: 700, textAlign: 'center' }}>
                    Get In Touch
                </Typography>

                <Grid container spacing={4}>
                    {/* Contact Info */}
                    <Grid item={true} xs={12} md={5}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, height: '100%', justifyContent: 'center' }}>
                            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, fontSize: '1.1rem' }}>
                                I'm currently available for freelance work or full-time opportunities. Let's connect and create something amazing together.
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: `${theme.palette.primary.main}15`, color: theme.palette.primary.main }}>
                                    <FiPhone size={24} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Phone</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>+94 75 238 6622</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: `${theme.palette.primary.main}15`, color: theme.palette.primary.main }}>
                                    <FiMail size={24} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Email</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>kethusan4@gmail.com</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Box sx={{ p: 2, borderRadius: '50%', bgcolor: `${theme.palette.primary.main}15`, color: theme.palette.primary.main }}>
                                    <FiMapPin size={24} />
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="text.secondary">Location</Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 600 }}>Kalmunai, Sri Lanka</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Contact Form / Action */}
                    <Grid item={true} xs={12} md={7}>
                        <Box className="glass-container" sx={{ p: 4 }}>
                            <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, fontFamily: '"Outfit", sans-serif' }}>
                                Send me a message
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)'
                                        }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Your Email"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)'
                                        }
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.5)'
                                        }
                                    }}
                                />

                                <Box sx={{ display: 'flex', gap: 2, mt: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        size="large"
                                        sx={{ flex: 1, py: 1.5, borderRadius: '8px' }}
                                    >
                                        Send Email
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        size="large"
                                        onClick={handleWhatsAppRedirect}
                                        startIcon={<FiMessageCircle />}
                                        sx={{
                                            flex: 1,
                                            py: 1.5,
                                            borderRadius: '8px',
                                            bgcolor: '#25D366', // WhatsApp Brand Color
                                            '&:hover': { bgcolor: '#128C7E' }
                                        }}
                                    >
                                        WhatsApp Me
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </motion.div>
        </Box>
    );
};
