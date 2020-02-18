import axios from 'axios';

const getAccessTokenApi = `http://dev-bepsy-api.objectedge.com/oe_commerce_api/occ/v1/oauth/login`;

export function getUserAuthentication(login, password) {
  const data = {
    username: login,
    password,
  };
  const headers = {
    Authorization: 'Bearer YWRtaW46YWRtaW4=',
    'Content-Type': 'application/json',
  };

  return axios.post(getAccessTokenApi, data, { headers });
}
