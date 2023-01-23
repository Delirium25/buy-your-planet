import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function Planet({ planet }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleClick = event => {
        setOpen(true);
    }

    const planetCard = (
        <>
            <div>
                {planet.name}
                {planet.picture}
                {planet.id}
                {planet.price}
                {planet.distance}
            </div>
            <div>
                <Button variant="outlined" onClick={handleClick}>Show Details</Button>
                <Button variant="outlined">Add To Cart</Button>
            </div>
        </>)

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    const modalWindow = (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    {planet.name}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    
                {planet.picture}
                {planet.id}
                {planet.price}
                {planet.distance}
                {planet.description}
                    </Typography>
                </Box>
            </Modal>
        </>)

    return (
        <>
            {planetCard}
            {modalWindow}
        </>
    )
}

export default Planet
