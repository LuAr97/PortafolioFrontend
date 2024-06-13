import { Box, Chip, Divider } from '@mui/material';
import { color } from 'framer-motion';
import React from 'react';

const AboutMe = () => {
    return (<>
        <Divider variant='middle' style={{marginTop: '5%'}}/>
        <Box style={{textAlign: 'center', marginLeft:'5%', marginTop: '5%'}}>
            <Chip label="About me" variant="outlined" style={{color: '#00ff00', borderColor:'#00ff00'}}/>
        </Box>
        <Box>

        </Box>
    </>);
};

export default AboutMe;