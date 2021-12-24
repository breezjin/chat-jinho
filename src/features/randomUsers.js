import React, { useEffect, useState } from 'react';

import axios from 'axios';

const API_URL = 'https://randomuser.me/api/?results=10';
const useRandomUsersApi = true;
const randomUsers = [];

async function getRandomUsers() {
  if (useRandomUsersApi) {
    const apiData = await axios.get(API_URL);
    console.log('apiData', apiData);//!!!!!!!!
    const { results } = apiData.data;
    console.log('results', results);//!!!!!!!!
    return results;
  }

  const res = await fetch("./data-users.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const results = await res.json();
  results.forEach(item => randomUsers.push(item));

  return results;
}

getRandomUsers();

export default randomUsers;
