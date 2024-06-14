import { Box, Chip, Divider, Grid, Typography } from '@mui/material';
import { color } from 'framer-motion';
import React from 'react';
import { isMobile } from 'react-device-detect';
const AboutMe = () => {
    return (<>
        <Divider variant='middle' style={{marginTop: '5%'}}/>
        <Box style={{textAlign: 'center', marginLeft:'5%', marginTop: '5%'}}>
            <Chip label="About me" variant="outlined" style={{color: '#00ff00', borderColor:'#00ff00'}}/>
        </Box>
        <Box style={{width: '90%'}}>
            <Grid container spacing={5}>
                <Grid item xs={ isMobile ? 12 : 6}>
                    <Typography variant="h6" style={{textAlign: 'left'}} className='subtitle'>
                        Professionally
                    </Typography>
                    <Typography variant="body1" style={{textAlign: 'left'}} className='subtitle'>
                        Coming from a Computer Science background with a Master in Cybersecurity. I have gained experience as a web developer, utilizing technologies such as React, Java, SQL, and Symfony.Additionally, I acquired skills in automation with Selenium and Cucumber.
                    </Typography>
                </Grid>

                <Grid item xs={isMobile ? 12 : 6}>
                    <Typography variant="h6" style={{textAlign: 'left'}} className='subtitle'>
                        My Goals
                    </Typography>
                    <Typography variant="body1" style={{textAlign: 'left'}} className='subtitle'>
                    I want to be able to use technology to reach and help people with their businesses, ideas and problems. I also want people to feel safe around technology.
                    </Typography>
                </Grid>
                
            </Grid>
        </Box>
        <br />
        <br />
    </>);
};

export default AboutMe;