import React from 'react';
import { useRouter } from 'next/router';
import FixedBottomNavigation from '../components/common/BottomNavigation';
import AppBar from '../components/common/AppBar';
import FloatingButton from '../components/common/FloatingBtn';
import { Box } from '@material-ui/core';

const AppLayout = ({ children }: any): JSX.Element => {
  const router = useRouter();

  if (router.pathname !== '/home' && router.pathname !== '/signUp') {
    return (
      <>
        <AppBar />
        <Box sx={{ mb: '56px' }}>{children}</Box>
        {router.pathname !== '/room/[id]' && <FloatingButton />}
        <FixedBottomNavigation />
      </>
    );
  } else {
    return children;
  }
};

export default AppLayout;
