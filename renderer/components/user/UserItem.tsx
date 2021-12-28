import Img from 'next/image';
import { Box, Typography } from '@material-ui/core';
import { IUser } from '../../lib/type';

interface IUserItem extends IUser {
  padding: number;
  children: JSX.Element;
}

const UserItem: React.FC<IUserItem> = ({ user, padding, children }): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', p: padding }}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Img src={user.profilePic} height='100%' width='100%'></Img>
      </Box>
      <Box sx={{ p: 2 }}>
        <Typography>{user.name}</Typography>
        <Typography gutterBottom>{user.email}</Typography>
        {children}
      </Box>
    </Box>
  );
};

export default UserItem;
