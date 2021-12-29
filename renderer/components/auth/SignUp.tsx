import { TextField } from '@material-ui/core';
import { StyledButton, width100 } from '../../lib/styles';
import useSigning from './useSigning';

const SignUp = (): JSX.Element => {
  const { userForm, errorMessage, onChange, signUp } = useSigning();

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <TextField label='email' id='email' type='email' variant='outlined' style={width100} onChange={onChange} value={userForm?.email} />
        <TextField label='password' id='password' type='password' variant='outlined' style={width100} onChange={onChange} value={userForm?.password} />
        <p>{errorMessage}</p>
        <StyledButton onClick={signUp} style={width100} disabled={!userForm?.email}>
          Sign Up
        </StyledButton>
      </form>
    </>
  );
};

export default SignUp;
