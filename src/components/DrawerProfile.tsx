import { Typography, Drawer, Box, Divider, Button, IconButton, Grid } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';
const DrawerProfile = () => {
    const whatsappWebsite = () => {
        window.open('https://wa.me/61433665185', '_blank');
    }
    const emailWebsite = () => {
        window.open('mailto:luisa.arbol97@gmail.com', '_blank');
    }
    const linkedinWebsite = () => {
        window.open('https://www.linkedin.com/in/luisa-arboleda-zapata-945bbab8/', '_blank');
    }
    if(isMobile) {
        return (
            <div style={{marginTop: 50}}>
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
                            
                            <Grid item xs={4}>
                                <IconButton  className='whatsappbtn' onClick={whatsappWebsite}><WhatsAppIcon /></IconButton >
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton  className='emailbtn' onClick={emailWebsite}><MailOutlineIcon /></IconButton >
                            </Grid>
                            <Grid item xs={4}>
                                <IconButton  className='linkedinbtn' onClick={linkedinWebsite}><LinkedInIcon /></IconButton >
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </div>
        )
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
                   
                   <Grid item xs={4}>
                       <IconButton  className='whatsappbtn' onClick={whatsappWebsite}><WhatsAppIcon /></IconButton >
                   </Grid>
                   <Grid item xs={4}>
                       <IconButton  className='emailbtn' onClick={emailWebsite}><MailOutlineIcon /></IconButton >
                   </Grid>
                   <Grid item xs={4}>
                       <IconButton  className='linkedinbtn' onClick={linkedinWebsite}><LinkedInIcon /></IconButton >
                   </Grid>
               </Grid>

           </Box>
       </Box>
   </Drawer>
    );
}

export default DrawerProfile;