import Img from 'next/image';
import { Box, Typography } from '@material-ui/core';
import { IUser } from '../../lib/type';

interface IUserItem extends IUser {
  padding: number;
}

const UserItem: React.FC<IUserItem> = ({ user, padding }): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', p: padding }}>
      <Img src={user.profilePic} width='100' height='100'></Img>
      <Box sx={{ p: 2 }}>
        <Typography>{user.name}</Typography>
        <Typography gutterBottom>{user.email}</Typography>
      </Box>
    </Box>
  );
};

export default UserItem;
