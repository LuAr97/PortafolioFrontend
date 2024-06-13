import { Box, ButtonGroup, IconButton } from "@mui/material";
import { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import InterestsIcon from '@mui/icons-material/Interests';
import FoundationIcon from '@mui/icons-material/Foundation';
const Menu = ({ scroll } : any) => {
    
    return(
        <Box className='menu'
            sx={{
                display: 'flex',
                '& > *': {
                m: 1,
                },
            }}
        >
            <ButtonGroup orientation="vertical" aria-label="Vertical button group">
                <IconButton className="menubtn1" onClick={() => scroll('landpage')}><FoundationIcon /></IconButton>
                <IconButton className="menubtn2" onClick={() => scroll('aboutme')}><PersonIcon /></IconButton>
                <IconButton className="menubtn3" onClick={() => scroll('resume')}><BusinessCenterIcon /></IconButton>
                <IconButton className="menubtn4" onClick={() => scroll('projects')}><ViewModuleIcon /></IconButton>
                <IconButton className="menubtn5" onClick={() => scroll('skills')}><InterestsIcon /></IconButton>
            </ButtonGroup>
        </Box>
   )
}

export default Menu;