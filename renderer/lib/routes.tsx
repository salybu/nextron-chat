import { NextPage } from 'next';
// import { useRouter } from 'next/dist/client/router';
import { Box } from '@material-ui/core';
import useAuth from './context/auth';
import { alignCenter } from './styles';

export function withPublic(Component: NextPage) {
  return function WithPublic(props: any) {
    const auth = useAuth();

    if (typeof window !== 'undefined') {
      if (auth.loggedUser) {
        auth.goUsers();
        return (
          <Box sx={alignCenter}>
            <h1>Loading ...</h1>
          </Box>
        );
      }
    }
    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component: NextPage) {
  return function WithProtected(props: any) {
    const auth = useAuth();

    if (typeof window !== 'undefined') {
      if (!auth.loggedUser) {
        auth.goHome();
        return (
          <Box sx={alignCenter}>
            <h1>Loading ...</h1>
          </Box>
        );
      }
    }

    return <Component auth={auth} {...props} />;
  };
}
