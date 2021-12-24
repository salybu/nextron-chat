import { useState } from 'react';
import { Box, Typography, Modal, Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

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

const FloatingButton = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <Fab color='primary' aria-label='add' sx={{ position: 'fixed', right: 10, bottom: 10 }}> */}
      <Fab onClick={handleOpen} color='primary' aria-label='add'>
        <AddIcon />
      </Fab>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Invite members
          </Typography>
          <Typography id='modal-modal-description'>Choose others you want to chat</Typography>
        </Box>
      </Modal>
    </>
  );
};

export default FloatingButton;
