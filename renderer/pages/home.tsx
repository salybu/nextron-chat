import { useState } from 'react';
import Head from 'next/head';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography } from '@material-ui/core';
import Link from '../components/Link';
import SignInComponent from '../components/auth/SignIn';
import { withPublic } from '../lib/routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing(4),
    },
  }),
);

const Login = (): JSX.Element => {
  const classes = useStyles({});
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleClick = () => setOpen(true);

  return (
    <>
      <Head>
        <title>Nextron Chat - Login</title>
      </Head>
      <div className={classes.root}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Super Secret Password</DialogTitle>
          <DialogContent>
            <DialogContentText>1-2-3-4-5</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color='primary' onClick={handleClose}>
              OK
            </Button>
          </DialogActions>
        </Dialog>
        <Typography gutterBottom>
          <Link href='/next'>Go to the next page</Link>
        </Typography>
        <Button variant='contained' color='secondary' onClick={handleClick}>
          Super Secret Password
        </Button>
        <SignInComponent />
        <Typography gutterBottom>
          <Link href='/signUp'>Go to the Sign Up page</Link>
        </Typography>
      </div>
    </>
  );
};

export default withPublic(Login);
