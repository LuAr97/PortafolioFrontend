import { Box, CircularProgress, Divider, Grid, IconButton, Typography } from '@mui/material';
import { color, motion } from 'framer-motion';
import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import InterestsIcon from '@mui/icons-material/Interests';


const Introduction = ({scroll}:{scroll : any}) => {
    const color = '#ff00b3'; //355a74
    
    return (
        <Box className='intro'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <Typography variant="h4" gutterBottom >
                    Hi there!
                </Typography>
                <Typography variant="h5" gutterBottom >
                    I am Luisa a passionate <a style={{color: color}}>Software Developer </a>
                </Typography>
                <Typography variant="h5" gutterBottom >
                    with 2 years of experience in building 
                </Typography>
                <Typography variant="h5" gutterBottom >
                    dynamic and user-friendly websites
                </Typography>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 1.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                
            >
                <Typography className='subtitle' variant="subtitle1" gutterBottom >
                    Take a minute of your time to see and discover more about me and my projects
                </Typography>
            </motion.div>
            <Grid container spacing={0.5} style={{marginTop: '15%', justifyItems: 'center'}}>
                
                <Grid item xs={3} style={{textAlign: 'center', alignItems: 'center', justifyItems: 'center'}}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className='circular' >
                            <IconButton className='menubtn2' onClick={() => scroll('aboutme')}>
                                <PersonIcon style={{ fontSize: 40 }} />
                            </IconButton>
                            <p>About me</p>
                        </div>
                    </motion.div>
                </Grid>
                <Grid item xs={3} style={{textAlign: 'center', alignItems: 'center', justifyItems: 'center'}}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 2.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className='circular'>
                            <IconButton className='menubtn3' onClick={() => scroll('resume')}>
                                <BusinessCenterIcon style={{ fontSize: 40 }} />                        
                            </IconButton>
                            <p>Resume</p>
                        </div>
                    </motion.div>
                    
                </Grid>
                <Grid item xs={3} style={{textAlign: 'center', alignItems: 'center', justifyItems: 'center'}}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 3,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className='circular'>
                            <IconButton className='menubtn4' onClick={() => scroll('projects')}>
                                <ViewModuleIcon style={{ fontSize: 40 }} />                        
                            </IconButton>
                            <p>Projects</p>
                        </div>
                    </motion.div>
                </Grid>
                <Grid item xs={3} style={{textAlign: 'center', alignItems: 'center', justifyItems: 'center'}}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                        duration: 0.8,
                        delay: 3.5,
                        ease: [0, 0.71, 0.2, 1.01]
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <div className='circular'>
                            <IconButton className='menubtn5' onClick={() => scroll('skills')}>
                                <InterestsIcon style={{ fontSize: 40 }} />                        
                            </IconButton>
                            <p>Skills</p>
                        </div>
                    </motion.div>
                </Grid>
                
            </Grid>
        </Box>
    );
};

export default Introduction;