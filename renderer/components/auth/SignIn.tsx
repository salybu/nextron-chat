import useSigning from './useSigning';

const SignIn = (): JSX.Element => {
  const { userForm, loading, errorMessage, onChange, signIn, signOut } = useSigning();

  return (
    <>
      {errorMessage}
      <p>You can log in or create a new account below using your email address.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset disabled={loading}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' value={userForm?.email} onChange={onChange} />
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' value={userForm?.password} onChange={onChange} />
          </div>
          <button onClick={signIn}>Log In User</button>
        </fieldset>
      </form>
    </>
  );
};

export default SignIn;
