import { useState } from 'react';
import router from 'next/router';
import { BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import GroupIcon from '@material-ui/icons/Group';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

const StyledPaper = styled(Paper)(() => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
}));

const FixedBottomNavigation = (): JSX.Element => {
  const [value, setValue] = useState(0);

  return (
    <StyledPaper>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue == 0) {
            router.replace('/users');
          } else if (newValue == 1) {
            router.replace('/rooms');
          }
        }}
      >
        <BottomNavigationAction label='Users' icon={<GroupIcon />} />
        <BottomNavigationAction label='Chatting Rooms' icon={<InsertCommentIcon />} />
      </BottomNavigation>
    </StyledPaper>
  );
};

export default FixedBottomNavigation;
