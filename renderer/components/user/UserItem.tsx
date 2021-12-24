import * as React from 'react';
import Img from 'next/image';
import { Box, Typography } from '@material-ui/core';

const UserItem = ({ user }) => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', padding: 15 }}>
      <Img src={user.profilePic} width='100' height='100'></Img>
      <Box sx={{ padding: 10 }}>
        <Typography>{user.name}</Typography>
        <Typography gutterBottom>{user.email}</Typography>
      </Box>
    </Box>
  );
};

export default UserItem;
