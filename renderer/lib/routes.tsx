import { NextPage } from 'next';
import { useRouter } from 'next/router';
// import { useRouter } from 'next/dist/client/router';
import useAuth from './auth';

export function withPublic(Component: NextPage) {
  return function WithPublic(props: any) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.loggedUser) {
      router.replace('/users');
      return <h1>Loading ...</h1>;
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
      return <h1>Loading ...</h1>;
    }

    return <Component auth={auth} {...props} />;
  };
}
