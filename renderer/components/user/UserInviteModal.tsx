import { useEffect, useState } from 'react';
import router from 'next/router';
import { createStyles, List, makeStyles, Typography } from '@material-ui/core';
import useAuth from '../../lib/context/auth';
import { IModal, UserInfo } from '../../lib/type';
import useUser from './useUser';
import { ChatService } from '../../lib/api/ChatService';
import UserSelect from './UserSelect';
import { StyledButton } from '../../lib/styles';

const useStyles = makeStyles(() =>
  createStyles({
    users: {
      paddingTop: 20,
      paddingBottom: 20,
    },
    button: {
      float: 'right',
      paddingLeft: 30,
      paddingRight: 30,
    },
  }),
);

const UserInviteModal: React.FC<IModal> = ({ handleClose }): JSX.Element => {
  const classes = useStyles();

  const { loggedUser } = useAuth();
  const { users } = useUser();

  const [isChecked, setIsChecked] = useState<Object>();
  const [selected, setSelected] = useState<string[]>();

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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(() => {
    if (isChecked) {
      setSelectedState();
    }
  }, [isChecked]);

  const setSelectedState = (): void => {
    let checkedArr = [];
    for (const [key, value] of Object.entries(isChecked)) {
      if (value) {
        checkedArr.push(key);
      }
    }
    setSelected(checkedArr);
  };

  const createChatRoom = async () => {
    const memberArr = [...selected, loggedUser.id];
    const { id, error } = await ChatService.createChatRoom(memberArr);
    router.push(`/room/${id}`);
    handleClose();
  };

  return (
    <>
      <Typography id='modal-modal-title' variant='h6' component='h2'>
        Invite members
      </Typography>
      <Typography id='modal-modal-description'>Choose others who you want to chat</Typography>
      <List className={classes.users}>
        {users?.map((user) => (
          <UserSelect user={user} isChecked={isChecked} handleChange={handleChange} />
        ))}
      </List>
      <StyledButton onClick={createChatRoom} disabled={!selected?.length} className={classes.button}>
        make a chatting room
      </StyledButton>
    </>
  );
};

export default UserInviteModal;
