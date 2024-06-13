import { Masonry } from "@mui/lab";
import { Box, Button, Card, CardContent, CardMedia, Chip, Modal, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { data }from '../images/images';
import { BorderStyle, Height } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";

interface project {
    id: number;
    name: string;
    description: string;
    gitUrl: string;
    img: string;
}
const ProjectCard = ({ item, color } : { item : project, color: string }) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const code = () => {
        window.open(item.gitUrl, '_blank');
    }

    const [skills, setSkills] = useState ([]);
    const image = data.find((img) => img.name === item.name);
    useEffect(() =>{
        retrieveSkills();
        
    },[]);


    const retrieveSkills = async () => {
        try {
            const response = await axios(`http://localhost:8080/projectskill/skills/${item.id}`);
            setSkills(response.data);
        } catch (error) {
            console.log("Retrieve projects failed");
        }
    }
    return(
        <>
        <motion.div whileHover={{ scale: 1.1 }}  onClick={code}>
            <Paper className="projectCard" >
                <Typography variant="h6">
                    {item.name}
                </Typography>
            </Paper>
        </motion.div>
        
        </>
    );
}

export default ProjectCard;