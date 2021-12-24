import { useRouter } from 'next/router';
import React from 'react';
import FixedBottomNavigation from '../components/common/BottomNavigation';
import AppBar from '../components/common/AppBar';
import FloatingButton from '../components/common/FloatingBtn';

export default function AppLayout({ children }: any) {
  const router = useRouter();

  if (router.pathname !== '/home' && router.pathname !== '/signUp') {
    return (
      <>
        <AppBar />
        {children}
        <FloatingButton />
        <FixedBottomNavigation />
      </>
    );
  } else {
    return children;
  }
}
