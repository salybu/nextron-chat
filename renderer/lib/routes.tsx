import { NextPage } from 'next';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/dist/client/router';
import { Box } from '@material-ui/core';
import useAuth from './context/auth';
import { alignCenter } from './styles';

export function withPublic(Component: NextPage) {
  return function WithPublic(props: any) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.loggedUser) {
      router.replace('/users');
      return (
        <Box sx={alignCenter}>
          <h1>Loading ...</h1>
        </Box>
      );
    }

    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component: NextPage) {
  return function WithProtected(props: any) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.loggedUser) {
      router.replace('/home');
      return (
        <Box sx={alignCenter}>
          <h1>Loading ...</h1>
        </Box>
      );
    }

    return <Component auth={auth} {...props} />;
  };
}
