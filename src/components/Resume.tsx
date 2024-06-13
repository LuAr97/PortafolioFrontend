import { Box, Chip, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import TimelineOppositeContent, {
    timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import axios from 'axios';

  
const Resume = () => {
    const[resume, setResume] = useState([]);
    useEffect(() =>{
        retrieveResume();
        
    },[]);
    const retrieveResume = async () => {
        try {
            const response = await axios(`http://localhost:8080/experience/all`);
            setResume(response.data);
        } catch (error) {
            console.log("Retrieve projects failed");
        }
    }
    return (
        <>
            <Divider variant='middle' style={{marginTop: '5%'}}/>
            <Box style={{textAlign: 'center', marginLeft:'5%', marginTop: '5%'}}>
                <Chip label="Resume" variant="outlined" style={{color: '#FFA500', borderColor:'#FFA500'}}/>
            </Box>
            <Box style={{marginTop: '5%'}}>
                <Timeline
                    sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                            flex: 0.2,
                        },
                        }}
                >
                    {resume.map((item: any) => (
                        <TimelineItem>
                            <TimelineOppositeContent>
                                <Typography variant="body2" className='oppositeColor'>
                                    {`${item.entry}-${item.end}`}
                                </Typography>
                            </TimelineOppositeContent>

                            <TimelineSeparator>
                                <TimelineDot className='timelineColor'/>
                                <TimelineConnector className='timelineColor' sx={{height: '90px'}}/>
                            </TimelineSeparator>
                            
                            <TimelineContent>
                                <Typography variant="h6" className='timelineColor'>
                                    {`${item.company} - ${item.position}`}
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
            
        </>
    );
};

export default Resume;