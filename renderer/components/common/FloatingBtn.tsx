import { useEffect, useState } from 'react';
import { Box, Button, Typography, Modal, Checkbox, Fab, makeStyles, createStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { UserInfo } from '../../lib/type';
import UserItem from '../../components/user/UserItem';
import useUser from '../user/useUser';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600, // 주의
  height: 600, // 주의
  overflowY: 'scroll',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles(() =>
  createStyles({
    fab: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 10,
    },
  }),
);

const FloatingButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { users } = useUser();

  const [isChecked, setIsChecked] = useState<Object>();
  const [selected, setSelected] = useState<string[]>();

  const classes = useStyles({});

  useEffect(() => {
    if (users) {
      setCheckedState(users);
    }
  }, [users]);

  const setCheckedState = (users: UserInfo[]): void => {
    const state = users.reduce(function (target, user) {
      target[user.id] = false;
      return target;
    }, {});
    setIsChecked(state);
  };

  useEffect(() => {
    if (isChecked) {
      let checkedArr = [];
      for (const [key, value] of Object.entries(isChecked)) {
        if (value) {
          checkedArr.push(key);
        }
      }
      setSelected(checkedArr);
    }
  }, [isChecked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <>
      <Fab onClick={handleOpen} color='primary' aria-label='add' className={classes.fab}>
        <AddIcon />
      </Fab>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Invite members
          </Typography>
          <Typography id='modal-modal-description'>Choose others you want to chat</Typography>
          {users?.map((user) => (
            <Box sx={{ display: 'flex' }}>
              {isChecked && <Checkbox checked={isChecked[user.id]} onChange={handleChange} name={user.id} />}
              <UserItem user={user} />
            </Box>
          ))}
          <Button>make a chatting room</Button>
        </Box>
      </Modal>
    </>
  );
};

export default FloatingButton;
