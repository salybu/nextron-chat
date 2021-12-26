import * as React from 'react';
import { styled, AppBar, Box, Toolbar, Typography, Button } from '@material-ui/core';
import { compose, spacing, palette, styleFunctionSx } from '@material-ui/system';
import useAuth from '../../lib/context/auth';

const styleFunction = styleFunctionSx(compose(spacing, palette));
const StyledTypo = styled(Typography)(styleFunction);

const FixedAppBar = styled(AppBar)(() => ({
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
}));

const CustomAppBar = () => {
  const { logout } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <FixedAppBar>
        <Toolbar>
          <StyledTypo variant='h6' sx={{ marginRight: 'auto' }}>
            Nextron Chat
          </StyledTypo>
          <Button onClick={logout} color='inherit'>
            Logout
          </Button>
        </Toolbar>
      </FixedAppBar>
    </Box>
  );
};

export default CustomAppBar;
