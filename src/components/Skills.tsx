import { Masonry } from '@mui/lab';
import { Box, Chip, Divider, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface Skill {
    id: number;
    name: string;
    img: string;
}
const Skills = () => {
    const [skills, setSkills] = useState<Array<Skill>>([]);
    
    
    useEffect(() =>{
        retrieveskills();
        
    },[]);

    const retrieveskills = async () => {
        try {
            const response = await axios(`http://localhost:8080/skill/all`);
            setSkills(response.data);
        } catch (error) {
            console.log("Retrieve skills failed");
        }
    }

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
    };

    return (<>
        <Divider variant='middle' style={{marginTop: '20%'}}/>
        <Box style={{textAlign: 'center', marginLeft:'5%', marginTop: '5%'}}>
            <Chip label="Skills" variant="outlined" style={{color: '#c305f8', borderColor:'#c305f8'}}/>
        </Box>
        <Typography variant="body1" style={{textAlign: 'left'}} className='subtitle'>
                Here are some of the skills I have worked on and there are more to come.
        </Typography>
        <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
        >
        <Box className='skillsbox'>
            <Grid container spacing={3}>
                {skills.slice(0, skills.length/2 + 1).map((skill: any, index: number) => (
                    <Grid item xs={2} key={index} >
                        <motion.li key={index} className="item" variants={item}>
                            
                            <Paper elevation={0} className="skillcard" style={{borderWidth :`3px`, borderStyle: 'solid'}}>
                                <Box>
                                    <img src={skill.img} alt={skill.name} style={{width: '25%', height: '35%'}}/>
                                    <Typography variant="body1" className='timelineColor'>
                                        {skill.name}
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.li>
                    </Grid>
                ))}
            </Grid>
            <Grid container spacing={10}>
                {skills.slice(skills.length/2 + 1, skills.length + 1).map((skill: any, index: number) => (
                    <Grid item xs={2} key={index} >
                        <motion.li key={index} className="item" variants={item}>
                            
                            <Paper elevation={0} className="skillcard" style={{borderWidth :`3px`, borderStyle: 'solid'}}>
                                <Box>
                                    <img src={skill.img} alt={skill.name} style={{width: '25%', height: '35%'}}/>
                                    <Typography variant="body1" className='timelineColor'>
                                        {skill.name}
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.li>
                    </Grid>
                ))}
            </Grid>
        </Box>
        </motion.ul>
        <br/>
        <br/>
        <br/>
    </>);
};

export default Skills;