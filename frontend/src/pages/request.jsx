import '@css/request.scoped.css';
import { useState } from 'react';
import { getAllData } from '@api/api';

function Request() {
  let [user, setUser] = useState('');

  function changeUser(data) {
    setUser(data);
  }

  getAllData().then((reply) => {
    changeUser(reply.data[0].item_name);
  });

  return <>{user}</>;
}

export default Request;
