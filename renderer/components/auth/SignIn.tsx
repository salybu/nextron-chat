import { TextField } from '@material-ui/core';
import { StyledButton, width100 } from '../../lib/styles';
import useSigning from './useSigning';

const SignIn = (): JSX.Element => {
  const { userForm, errorMessage, onChange, signIn } = useSigning();

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField label='email' id='email' type='email' variant='outlined' style={width100} onChange={onChange} value={userForm?.email} />
        <TextField label='password' id='password' type='password' variant='outlined' style={width100} onChange={onChange} value={userForm?.password} />
        <p>{errorMessage}</p>
        <StyledButton onClick={signIn} style={width100}>
          Log In
        </StyledButton>
      </form>
    </>
  );
};

export default SignIn;
