import { useRouter } from 'next/router';
import { styled, AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import useAuth from '../../lib/context/auth';

const FixedAppBar = styled(AppBar)(({ theme }) => ({
  color: `${theme.palette.common.white}`,
  flexGrow: 1,
  position: 'sticky',
  top: 0,
  left: 0,
  right: 0,
}));

const CustomAppBar = () => {
  const { logout } = useAuth();
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <FixedAppBar>
      <Toolbar>
        {router.pathname == '/room/[id]' && (
          <IconButton color='inherit' onClick={goBack}>
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant='h6' style={{ marginRight: 'auto' }}>
          Nextron Chat
        </Typography>
        <Button onClick={logout} color='inherit'>
          Logout
        </Button>
      </Toolbar>
    </FixedAppBar>
  );
};

export default CustomAppBar;
