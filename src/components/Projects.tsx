import { Masonry } from '@mui/lab';
import { Box, Chip, Divider, Grid, Paper, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

interface project {
    id: number;
    name: string;
    description: string;
    img: string;
}


const Projects = () => {
    const [projects, setProjects] = useState<Array<project>>([]);
    const colors = ['#CCF1FF', '#E0D7FF', '#FFCCE1', '#D7EEFF', '#FAFFC7']

    useEffect(() =>{
        retrieveProjects();
        
    },[]);

    const retrieveProjects = async () => {
        try {
            const response = await axios(`http://localhost:8080/project/all`);
            setProjects(response.data);
        } catch (error) {
            console.log("Retrieve projects failed");
        }
    }
    return (
        <>
            <Divider variant='middle' style={{marginTop: '10%'}}/>
            <Box style={{textAlign: 'center', marginLeft:'5%', marginTop: '5%'}}>
                <Chip label="Projects" variant="outlined" style={{color: '#05bdfa', borderColor:'#05bdfa'}}/>
            </Box>
            <Typography variant="body1" style={{textAlign: 'left'}} className='subtitle'>
                Here are some of the projects I have worked on, click to open the code and find out more about them.
            </Typography>
            <Box style={{marginTop: '15%'}}>
                <Grid container spacing={5}>
                    {projects.map((project: any, index: number) => (
                        <Grid item xs={3} key={index} >
                            <ProjectCard item={project} color={colors[index]}/>
                        </Grid>
                    ))}
                    
                </Grid>
            </Box>
        </>
    );
};

export default Projects;