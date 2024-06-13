import { Typography, Drawer, Box, Divider, Button, IconButton, Grid } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { motion } from 'framer-motion';
const DrawerProfile = () => {
    const whatsappWebsite = () => {
        window.open('https://wa.me/61433665185', '_blank');
    }
    const emailWebsite = () => {
        window.open('mailto:luisa.arbol97@gmail.com', '_blank');
    }
    return (
       
        <Drawer className="drawer" variant='permanent' anchor='right'>
            <Box className='profile'>
                <Typography variant="h4" gutterBottom>
                    Luisa Arboleda
                </Typography>
                <Typography variant="h6" gutterBottom style={{color: '#ff00b3'}}>
                    Software Developer
                </Typography>
                <Divider variant='middle' />
                <Box style={{marginTop: 30}}>
                    <img className='profile' src='/drawer.jpg' width={200} height={250}/>
                    
                </Box>
                <Box style={{marginTop: 30}}>
                    <Typography variant="h6" gutterBottom>
                        Melbourne Australia
                    </Typography>
                </Box>
                
                <Box style={{marginTop: 30}}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                        </Grid>
                        
                        <Grid item xs={3}>
                            <IconButton  className='whatsappbtn' onClick={whatsappWebsite}><WhatsAppIcon /></IconButton >
                        </Grid>
                        <Grid item xs={3}>
                            <IconButton  className='emailbtn' onClick={emailWebsite}><MailOutlineIcon /></IconButton >
                        </Grid>
                        <Grid item xs={3}>
                        </Grid>
                    </Grid>

                </Box>
            </Box>
        </Drawer>
    );
}

export default DrawerProfile;