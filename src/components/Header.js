// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import { Divider, Typography } from '@mui/material';
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
    <Typography variant='h4' sx={{padding:1}}>Call a Friend</Typography>
    <Divider><Typography>Your friendly contact app</Typography></Divider>
    </>
  );
};

export default Header;
