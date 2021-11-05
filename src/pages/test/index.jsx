import { useContext } from 'react';
import './style.scss';
import { getGithubUserURL } from '@api/api';
import { useFetch } from '@common';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AppContext } from '@common/AppContext';

export default () => {
  const { data: users, isPending, error } = useFetch(getGithubUserURL);
  let context = useContext(AppContext);
  let { amount, depositMoney, withdrawMoney } = context;
  let list = '';

  if (isPending) list = <div>Loading</div>;
  if (error) list = <div>{error}</div>;
  if (users) {
    let limit = amount >= 0 ? amount : 0;
    list = users.slice(0, limit).map((i, index) => {
      return (
        <div key={index} className='user'>
          <div className='username'>{i.login}</div>
          <a href={i.html_url} target='_blank' rel='noreferrer'>
            <img src={i.avatar_url} alt={i.login + 'avatar'} className='avatar' />
          </a>
        </div>
      );
    });
  }

  return (
    <>
      <div className='control'>
        <h1>{amount}</h1>
        <Stack spacing={2} direction='row'>
          <Button variant='outlined' size='large' onClick={() => depositMoney(1)}>
            Deposit
          </Button>
          <Button variant='outlined' size='large' onClick={() => withdrawMoney(1)}>
            Withdraw
          </Button>
        </Stack>
      </div>
      <div className='container'>{list}</div>
    </>
  );
};
