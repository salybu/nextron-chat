import { useState } from 'react';
import { Box, Modal, Fab, makeStyles, createStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import UserInviteModal from '../user/UserInviteModal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fab: {
      position: 'fixed',
      right: 20,
      bottom: 20,
      zIndex: 10,
    },
    modal: {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 600, // 주의
      height: 600, // 주의
      overflowY: 'scroll',
      backgroundColor: theme.palette.background.default,
      border: '2px solid #000',
      padding: 25,
    },
  }),
);

const FloatingButton = () => {
  const classes = useStyles({});

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Fab onClick={handleOpen} color='primary' aria-label='add' className={classes.fab}>
        <AddIcon />
      </Fab>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box className={classes.modal}>
          <UserInviteModal handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
};

export default FloatingButton;
