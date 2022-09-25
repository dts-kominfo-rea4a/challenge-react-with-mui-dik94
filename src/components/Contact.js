// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ dataContacs }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <Card sx={{ marginRight: 10 }}>
                <List sx={{ width: '100%', bgcolor: '#dbf6f0' }}>
                    {dataContacs
                        .map((item, index) => (
                            <>
                                <ListItem key={index} alignItems="flex-start">
                                    <ListItemAvatar sx={{ paddingRight: 2 }}>
                                        <Avatar alt="" src={item.photo} sx={{ width: 70, height: 70 }} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={
                                            <React.Fragment>
                                                <Typography
                                                    sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                </Typography>
                                                {item.phone}
                                                <ListItemText primary={item.email} />
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                                <Divider variant="fullWidth" component="li" />
                            </>
                        ))
                    }
                </List>
            </Card>
        </>
    );
};

export default Contact;
