import { FormEvent, Fragment, StrictMode } from 'react';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useAuth } from '../../../common/auth/auth';

export default () => {
  let navigate = useNavigate();
  let auth = useAuth();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formData = new FormData(event.currentTarget);
    let username = formData.get('username') as string;

    auth.signin(username, () => {
      navigate('./home', { replace: true });
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <input name='username' type='text' />
        </label>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
