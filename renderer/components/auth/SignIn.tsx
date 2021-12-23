import useAuth from './useAuth';

const SignIn = (): JSX.Element => {
  const { user, loading, errorMessage, onChange, signIn } = useAuth();

  return (
    <>
      {errorMessage}
      <p>You can log in or create a new account below using your email address.</p>
      <form onSubmit={(e) => e.preventDefault()}>
        <fieldset disabled={loading}>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='email' value={user?.email} onChange={onChange} />
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' value={user?.password} onChange={onChange} />
          </div>
          <button onClick={signIn}>Log In User</button>
        </fieldset>
      </form>
    </>
  );
};

export default SignIn;
