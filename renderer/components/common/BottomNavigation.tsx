import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, CssBaseline, BottomNavigation, BottomNavigationAction, Paper } from '@material-ui/core';
import { styled } from '@material-ui/styles';
import GroupIcon from '@material-ui/icons/Group';
import InsertCommentIcon from '@material-ui/icons/InsertComment';

const StyledPaper = styled(Paper)(() => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
}));

export default function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  const router = useRouter();

  return (
    <Box>
      <CssBaseline />
      <StyledPaper>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(newValue);
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
    </Box>
  );
}
