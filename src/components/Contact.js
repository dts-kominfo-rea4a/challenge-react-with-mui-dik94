// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ paddingRight: 2 }}>
                    <Avatar alt="" src={data.photo} sx={{ width: 70, height: 70 }} />
                </ListItemAvatar>
                <ListItemText
                    primary={<Typography sx={{ fontWeight: 500 }}>
                            {data.name}
                        </Typography>}
                    secondary={
                        <>
                            <Typography>{data.phone}</Typography>
                            <Typography>{data.email}</Typography>
                        </>
                    }
                />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
        </>
    );
};

export default Contact;
